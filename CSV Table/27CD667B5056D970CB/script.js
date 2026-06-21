co_import("csv-table");
co_start();

const index=val('options','index');
const delta =val('options','end')-val('options','start')+1;
const start =val('options','start')+delta*(index-1);
const end =val('options','end')+delta*(index-1);;

print(`<csv-table src="${val('file')}" start=${start} end=${end} ${val('header')?'':'headless'} ${val('numeric')?'numeric':''}></csv-table>`);
co_end();