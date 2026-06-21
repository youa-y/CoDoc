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

// Find the maximum value to scale the bars correctly
let maxVal = 0;
for(i=0; i<count; i++){
  let v = Number(val('value', i));
  total = total + v;
  if(v > maxVal) {
    maxVal = v;
  }
}

if(maxVal > 0) {
  // Start Wrapper
  print("<div class='chart-wrapper'>");
  
  // Start SVG (300 wide, 200 tall)
  print("<div class='chart-svg-box'>");
  print("<svg width='100%' height='200' viewBox='0 0 300 200' preserveAspectRatio='xMidYMid meet'>");
  
  // Draw base line
  print("<line x1='0' y1='180' x2='300' y2='180' stroke='#cccccc' stroke-width='1'></line>");
  
  // Calculate bar width dynamically based on how many items there are
  // Max width 40pt, Min width 10pt
  let barWidth = 300 / count;
  if(barWidth > 40) barWidth = 40;
  if(barWidth < 10) barWidth = 10;
  
  for(i=0; i<count; i++){
    let n = val('name', i);
    let v = Number(val('value', i));
    let c = getColor(i);
    
    // Calculate bar height (max height is 160px)
    let barHeight = (v / maxVal) * 160;
    
    // X position: spread them evenly across the 300px width
    let xPos = (300 / count) * i + ((300 / count) - barWidth) / 2;
    
    // Y position: start from bottom (180) and go up
    let yPos = 180 - barHeight;
    
    // Print Bar
    print("<rect x='" + xPos + "' y='" + yPos + "' width='" + barWidth + "' height='" + barHeight + "' fill='" + c + "' rx='3'></rect>");
  }
  
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