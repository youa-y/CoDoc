co_start();

var table = new Table('main', 'table');
var data = table.data;
var skipCells = new Set();

var tableDir = (data.f === true) ? ' dir="rtl"' : ' dir="ltr"';
const headless=val('headless')? "class='headless' ":" ";
print('<table '+headless + tableDir + '>');

if (data.w) {
    print('<colgroup>');
    for (var i = 0; i < data.w.length; i++) {
        var width = data.w[i];
        print('<col style="width: ' + width + 'px;">');
    }
    print('</colgroup>');
}

if (data.d) {
    for (var rowIndex = 0; rowIndex < data.d.length; rowIndex++) {
        var row = data.d[rowIndex];
        print('<tr>');
            
        for (var colIndex = 0; colIndex < row.length; colIndex++) {
            var cellKey = rowIndex + '-' + colIndex;
            if (skipCells.has(cellKey)) {
                continue;
            }

            var cell = row[colIndex];
            var attrs = '';
                
            if (data.m) {
                for (var mi = 0; mi < data.m.length; mi++) {
                    var m = data.m[mi];
                    if (m.row === rowIndex && m.col === colIndex) {
                        for (var r = m.row; r < m.row + m.rowSpan; r++) {
                            for (var c = m.col; c < m.col + m.colSpan; c++) {
                                if (r !== rowIndex || c !== colIndex) {
                                    skipCells.add(r + '-' + c);
                                }
                            }
                        }
                        attrs += ' colspan="' + m.colSpan + '" rowspan="' + m.rowSpan + '"';
                        break;
                    }
                }
            }

            if (!cell) {
                print('<td' + attrs + '></td>');
                continue;
            }

            if (cell.c && cell.c.length > 0) {
                attrs += ' class="' + cell.c.join(' ') + '"';
            }
                
            print('<td' + attrs + '>' + cell.t + '</td>');
        }
        print('</tr>');
    }
}

print('</table>');
print(`<label>${val('main','name')}</label>`);


co_end();