function closeLightBox() {
	document.getElementById("lightbox").style.display = "none";
	document.getElementById("link").src = "";
	document.getElementById("header").style.display = "block";
}
window.onload = function() {
	closeLightBox();
	document.getElementById("artist1").onclick = function() {
		showLightBox1();
		document.getElementById("header").style.display = "none";
	};
	document.getElementById("artist2").onclick = function() {
		showLightBox2();
		document.getElementById("header").style.display = "none";
	};
	document.getElementById("artist3").onclick = function() {
		showLightBox3();
		document.getElementById("header").style.display = "none";
	};
	document.getElementById("artist4").onclick = function() {
		showLightBox4();
		document.getElementById("header").style.display = "none";
	};
	document.getElementById("artist5").onclick = function() {
		showLightBox5();

		document.getElementById("header").style.display = "none";
	};
	document.getElementById("artist6").onclick = function() {
		showLightBox6();
		document.getElementById("header").style.display = "none";
	};
	document.getElementById("artist7").onclick = function() {
		showLightBox7();
		document.getElementById("header").style.display = "none";
	};
	document.getElementById("lightbox").onclick = function() {
		closeLightBox();

	};
};

function showLightBox1() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/R2.jpg";
	document.getElementById("message").innerHTML = "Anyma has been dominating the live performance game since he first presented his genesis NFT EVA 0 at Printworks London in November 2021. The artist has been on a journey of creating a link between the NFT world and the real world. Matteo Milleri (Anyma) aspired to establish his own personality by creating a utopic dystopic environment that mixes technology, nature, and mankind. Since the NFT space started rising and the idea of NFTs became popular, Matteo was then able to connect his concepts with the blockchain.";
	document.getElementById("name").innerHTML = "『 Anyma 』";
	document.getElementById("link").src = "https://open.spotify.com/embed/artist/4iBwchw0U0GZv5RfVYSMxN?utm_source=generator";
}

function showLightBox2() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/Mathame2.jpg";
	document.getElementById("message").innerHTML = "Mathame are an Italian techno pair who bring real depth of emotion to their grooves. As such it makes perfect sense they come on labels like Tale Of Us’s Afterlife, where they return with a new one in the form of ‘For Every Forever’. This brotherly duo grew up with parents who ran their own radio and then moved deep into the forest to run their own idyllic holiday getaway. They say they have an album on the way and continue to headline some of the world’s best clubs. Here we speak to them about all this and more.";
	document.getElementById("name").innerHTML = "『 Mathame 』";
	document.getElementById("link").src = "https://open.spotify.com/embed/artist/6QSwQEz8CDMg8Rqk8dEkxS?utm_source=generator";


}

function showLightBox3() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/tale of us2.jpg";
	document.getElementById("message").innerHTML = "Tale of Us is an Italian music production and DJ duo consisting of Carmine Conte and Matteo Milleri. They are based in Berlin, Germany.Carmine Conte was born in Toronto and Matteo Milleri in New York. They both moved to Italy at a young age and met in Milan in 2008 while studying sound engineering at the SAE Institute.They relocated to Berlin and began recording music together. Their debut EP Dark Song was released in 2011. They followed this up with Another Earth in 2013 and North Star/Silent Space in 2015, and in 2017, the group signed with Deutsche Grammophon and released its first full-length album, titled Endless.";
	document.getElementById("name").innerHTML = "『 Tale of us 』";
	document.getElementById("link").src = "https://open.spotify.com/embed/artist/1UL813H5aj3e8ekE5RqWqc?utm_source=generator";

}

function showLightBox4() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/mind2.jpg";
	document.getElementById("message").innerHTML = "Expressing a musical venture which draws from the combined roots of IDM, house and techno, Mind Against are the Italian-born, Berlin-based duo of Alessandro and Federico Fognini.Their gift for creating emotion through the synths and percussive instruments in their studio translates uniquely onto the dancefloor, where their slick, moving take on techno makes for a special kind of peak in the club. They draw from the psychedelic hooks of 1980s soundtracks and from modern dance music’s emphasis on sound design to create a distinctive and immensely powerful sound.";
	document.getElementById("name").innerHTML = "『 Mind against 』";
	document.getElementById("link").src = "https://open.spotify.com/embed/artist/48LWLoeY0dhwaiX1FRsn72?utm_source=generator";
}

function showLightBox5() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/kasst2.jpg";
	document.getElementById("message").innerHTML = "KAS:ST is a techno group/act, producers and label owners consisting of members Karol Herse and Manuel Sene. Since its establishment in Paris, France, the group has quickly left a big impression on the techno scene. Their music can be described as taking listeners on a journey through techno music’s dark and gloomy emotions.";
	document.getElementById("name").innerHTML = "『 Kas:st 』";
	document.getElementById("link").src = "https://open.spotify.com/embed/artist/7orlzf5LTqSnCzURkZFebN?utm_source=generator";
}

function showLightBox6() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/innellea2.jpg";
	document.getElementById("message").innerHTML = "When you think of someone who’s made a show-stunning impact on the world of melodic techno, your thoughts should immediately go to Innellea. The German producer has already been known as a master of all musical trades and now continues to outshine as he drops his latest Extended Play titled ‘Distorted Youth’ with its accompanying musical video, tour and fashion line. Today we take an inside look into the world of Innellea, discovering how ‘Distorted Youth’ came to be.";
	document.getElementById("name").innerHTML = "『 Innellea 』";
	document.getElementById("link").src = "https://open.spotify.com/embed/artist/71rqI5HtraA3qXBwatyG6e?utm_source=generator";
}

function showLightBox7() {


	document.getElementById("lightbox").style.display = "block";
	document.getElementById("artistimg").src = "imagex/argy2.jpg";
	document.getElementById("message").innerHTML = "Greek-born Argy has spent the last decade releasing genre-spanning music on labels like Cocoon, Cuttin' Headz, Crosstown Rebels, Play It Say It, and Archie Hamilton's Moscow Records. The dynamic producer is also a masterful selector. He was a resident at Berlin's Panorama Bar at the tender age of 20 and has since rocked the decks at countless clubs, including residencies in Ibiza at Amnesia, Space, and Pacha. The consummate crate digger is consistently ahead of the curve and revealed the talents of artists like the Martinez Brothers and Solomun in the early '00s, years before they dominated the dancefloor.";
	document.getElementById("name").innerHTML = "『 Argy 』";
	document.getElementById("link").src = "https://open.spotify.com/embed/artist/1NaQOKgddaJipUtmptb7GI?utm_source=generator";
}
     
   

