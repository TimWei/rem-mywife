class GoogleSpeech {
	constructor(str){
		this.str = str;
	}
	say(){
		var google_url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q='+ encodeURI(this.str) +'&tl=zh-tw'
		var audio = new Audio(google_url);
		audio.play();
	}
};