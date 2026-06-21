co_start();

// Get Settings
let color_seed = Number(val('settings', 'color_seed')) || 0;
let unit = val('settings', 'unit') || "";

// Helper function to generate unique colors based on seed
function getColor(index) {
    let hue = ((index * 137.508) + color_seed) % 360;
    return "hsl(" + hue + ", 65%, 50%)";
}

let total = 0;
let count = len();
let i = 0;

for(i=0; i<count; i++){
  total = total + Number(val('value', i));
}

if(total > 0) {
  // Start Wrapper
  print("<div class='chart-wrapper'>");
  
  // SVG Chart
  print("<div class='chart-svg-box'>");
  print("<svg width='200' height='200' viewBox='0 0 200 200'>");
  print("<g transform='rotate(-90 100 100)'>");
  
  let offset = 0;
  
  for(i=0; i<count; i++){
    let v = Number(val('value', i));
    let segment = (v / total) * 502; 
    let c = getColor(i);
    
    print("<circle cx='100' cy='100' r='80' fill='none' stroke='" + c + "' stroke-width='30' stroke-dasharray='" + segment + " 502' stroke-dashoffset='-" + offset + "'></circle>");
    
    offset = offset + segment;
  }
  
  print("</g>");
  print("</svg>");
  print("</div>");

  // Legend / Captions
  print("<div class='chart-legend'>");
  for(i=0; i<count; i++){
    let n = val('name', i);
    let v = Number(val('value', i));
    let c = getColor(i);
    
    // Format value to 1 decimal place
    let formattedValue = v.toFixed(1);
    
    print("<div class='chart-legend-item'>");
    print("<span class='chart-dot' style='background-color:" + c + ";'></span>");
    // Output: Name (0.0 kg)
    print("<span class='chart-caption'>" + n + " (" + formattedValue + " " + unit + ")</span>");
    print("</div>");
  }
  print("</div>");

  // End Wrapper
  print("</div>");
  
} else {
  print("<div class='chart-wrapper'>No data</div>");
}

co_end();