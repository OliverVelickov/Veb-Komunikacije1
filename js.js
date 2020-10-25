<script>
function Blink() {
	obj=document.getElementById("blink");
	if (obj.style.visibility=="hidden") obj.visibility="visible";
		else obj.style.visibility="hidden";
	window.setTimeout("Blink();",500);
}
</script>