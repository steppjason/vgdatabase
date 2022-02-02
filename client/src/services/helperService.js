class Helper{

	static titleToURL(title){
		return title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-")
	}

}

export default Helper