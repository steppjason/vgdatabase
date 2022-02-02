class Helper{

	static titleToURL(title){
		return title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-")
	}

	static formatDate(date){
		return date = new Date(date).toLocaleDateString("en-US")
	}

	static formateDateForForm(date) {
		return date = new Date(date).toISOString().split('T')[0]
	}
}

export default Helper