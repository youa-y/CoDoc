co_start();
print(`<ul>`);
for (let i=0; i<len();i++){
  print('<li>'+ val('item',i)+'</li>');
}
print(`</ul">`);
co_end();