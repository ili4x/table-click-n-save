var tableCLickNSave_base = 'https://raw.githubusercontent.com/ili4x/table-click-n-save/master';

$.getScript(tableCLickNSave_base + '/unpkg.com/FileSaver.min.js');
$.getScript(tableCLickNSave_base + '/unpkg.com/xlsx.min.js');
$('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', tableCLickNSave_base + '/table-click-n-save.css'));

function tableCLickNSave_mouseenter(ev) {
	$(ev.currentTarget).addClass('table-click-n-save-selected');
}
function tableCLickNSave_mouseleave(ev) {
	$(ev.currentTarget).removeClass('table-click-n-save-selected');
}

function tableCLickNSave_init() {
	$('table').on('mouseenter', tableCLickNSave_mouseenter).on('mouseleave', tableCLickNSave_mouseleave).on('click', tableCLickNSave_saveTable);
}

function tableCLickNSave_end() {
	$('table').off('mouseenter', tableCLickNSave_mouseenter).off('mouseleave', tableCLickNSave_mouseleave).off('click', tableCLickNSave_saveTable);
	$('.table-click-n-save-selected').removeClass('table-click-n-save-selected');
}

function tableCLickNSave_saveTable(ev) {
	var table = ev.currentTarget;
	var type = 'xls';
	var wb = XLSX.utils.table_to_book(table, {sheet: "filename"});
	XLSX.writeFile(wb, "filename" + '.' + (type || 'xlsx'));
	tableCLickNSave_end();
}


tableCLickNSave_init();