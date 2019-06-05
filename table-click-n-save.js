var tableCLickNSave_base = 'https://ili4x.github.io/table-click-n-save';


function tableCLickNSave_loadcss(src) {
	var link = document.createElement('link');
	link.rel = "stylesheet";
	link.type = "text/css"
	link.href = src;
	document.head.appendChild(link);
}

function tableCLickNSave_loadscript(src, onload) {
	var script = document.createElement('script');
	script.src = src;
	if (onload) {
		script.onload = onload;
	}
	document.head.appendChild(script);
}

function tableCLickNSave_mouseenter(ev) {
	$(ev.currentTarget).addClass('table-click-n-save-selected');
}
function tableCLickNSave_mouseleave(ev) {
	$(ev.currentTarget).removeClass('table-click-n-save-selected');
}

function tableCLickNSave_start() {
	$('table').on('mouseenter', tableCLickNSave_mouseenter).on('mouseleave', tableCLickNSave_mouseleave).on('click', tableCLickNSave_saveTable);
}

function tableCLickNSave_end() {
	$('table').off('mouseenter', tableCLickNSave_mouseenter).off('mouseleave', tableCLickNSave_mouseleave).off('click', tableCLickNSave_saveTable);
	$('.table-click-n-save-selected').removeClass('table-click-n-save-selected');
}

function tableCLickNSave_saveTable(ev) {
	var table = ev.currentTarget;
	var type = 'xls';
	var fn = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
	var wb = XLSX.utils.table_to_book(table, {sheet: fn});
	XLSX.writeFile(wb, fn + '.' + (type || 'xlsx'));
	tableCLickNSave_end();
}

//tableCLickNSave_loadscript(tableCLickNSave_base + '/unpkg.com/FileSaver.min.js');
tableCLickNSave_loadscript(tableCLickNSave_base + '/unpkg.com/xlsx.min.js');
tableCLickNSave_loadcss(tableCLickNSave_base + '/table-click-n-save.css');
if (typeof jQuery === 'undefined') {
	tableCLickNSave_loadscript("https://code.jquery.com/jquery-3.4.1.min.js", tableCLickNSave_start);
} else {
	tableCLickNSave_start();
}