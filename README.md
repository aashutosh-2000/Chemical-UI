# Chemical Supplies Table Project
This project is a simple web application built using HTML, CSS, and JavaScript. The application displays a table of chemical supplies with options to sort, add, delete, and save the data. The goal of the project is to create an editable and dynamic table that allows users to manage chemical supply data interactively.
----------------------------------------------------------------------------
Sortable Table Columns: Users can click on the column headers to sort the table in ascending or descending order.
Add Row: Allows users to add a new chemical entry to the table with editable fields.
Delete Row: Users can select and delete any row from the table.
Save Table Data: Converts the table data to JSON and stores it in localStorage, making it persistent across page reloads.
Editable Cells: The cells of the table can be edited directly by the user, allowing easy updates to the data.

-------------------------------------------------------------------------
How to Use the Application
Add a Row:

Click the ➕ Add button on the toolbar. This will add a new row to the bottom of the table with default values.
You can edit the newly added row by clicking directly on any cell and entering the desired data.
Select and Delete a Row:

Click on any row to select it. The selected row will be highlighted in blue.
Once selected, click the 🗑 Delete button to remove the row from the table.
Save Data:

After editing or adding data, click the 💾 Save button to save the current table contents.
The data will be stored in the browser’s localStorage, making it persistent across reloads.
Refresh Data:

If any updates are made or you want to reload the page, the table will automatically repopulate from saved data.
Sort the Data:

Click on any column header (e.g., ID, Chemical Name, Vendor, etc.) to sort the table by that column.
The table will alternate between ascending and descending order when clicking on the same column multiple times.
