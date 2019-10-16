function convert24to12(hour) {
	if (hour == 24 || hour == 0) {
		return "12am";
	}
	else if (hour < 12) {
		return hour + "am";
	}
	else if (hour == 12) {
		return "12pm";
	}
	else {
		return (hour - 12) + "pm";
	}
}
