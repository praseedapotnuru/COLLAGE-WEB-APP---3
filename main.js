var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function save() {
	recognition.save();
}

recognition.onresult = function (Event) {
	Content = event.results[0][0].transcript.toLowerCase();

	if (Content == "selfie") {
		speak();
	}
}

function speak() {
	var synth = window.speechSynthesis;
	speak data = "Taking your selfie in 5 seconds"
	var utterThis = new SpeachSynthesisIsUtterance(speak.data);
	synth.speak(utterThis);
	webcam.attach(camera);

	setTimeout(function () {
		img_id = "selfie1";
		take_snapshot();
		speak_data = "Taking your next Selfie in 10 seconds";
		var utterThis = new SpeechSynthesisUtterance(speak_data);
		synth.speak(utterThis);
		take_selfie;
		save();
	}, 5000);

	setTimeout(function () {
		img_id = "selfie2";
		take_snapshot();
		save();
		speak_data = "Taking your next Selfie in 15 seconds";
		var utterThis = new SpeechSynthesisUtterance(speak_data);
		synth.speak(utterThis);
	}, 10000);

	setTimeout(function () {
		img_id = "selfie3";
		take_snapshot();
		save();
	}, 15000);
}

camera = document.getElementById(camera);
Webcam.set({
	width: 360,
	height: 250,
	image_format: 'jpeg',
	jpeg_quality: 90
});

function take_snapshot() {
	Webcam.snap(function (data_uri) {

		if (img_id == "selfie1") {
			document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>';
		}
		if (img_id == "selfie2") {
			document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>';
		}
		if (img_id == "selfie3") {
			document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>';
		}
	});
}

function save() {
	link = document.getElementById("link");
	image = document.getElementById("selfie_image");
	link.href = image;
	link.click();
}
