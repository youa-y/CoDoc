The software provides a graphical interface for creating and editing these files. By accessing the item options and clicking `"Rebuild"`, a completely new, reprogrammable item will be generated.

If you prefer the manual approach to editing files, this option is fully available, and this section is entirely open-source.  
Each item contains a set of well-defined files, all of which are essential for its operation.

I will focus on the `script.js` file, as it is the most crucial. It follows a specific coding convention that should be adhered to for seamless integration with the internal core.

### Global Functions
- **`print`**: Displays text or HTML inside the component.
- **`co_import`**: Adds external libraries to the project.
- **`co_start`**: Opens the main HTML container for the component.
- **`co_end`**: Closes the main HTML container.
- **`len`**: Counts the total number of items in a specific data section.
- **`val`**: Gets specific data values from the system.
- **`is_enable`**: Checks if a specific data section is turned on or active.
- **`src`**: Creates full links for files, images, or media.

### Table Class
Used to manage and read data from tables.
- **Setup**: Initialized using the section, field, and index.
- **Read Data**: `getCell` and `getCellValue` get the text inside a cell. `getCellFormula` gets any math formulas. `getCellClasses` gets the CSS styling applied to the cell.
- **Check Status**: `isCellEmpty` checks if a cell is completely blank.
- **Table Size**: `getRowCount` and `getColCount` tell you the total number of rows and columns in the table.