function switchto(elem)
{
	document.getElementById('about').style.display = document.getElementById('photos').style.display = document.getElementById('videos').style.display = document.getElementById('twitter').style.display = 'none';
	document.getElementById(elem).style.display = 'inline';
	if (elem == 'about')
	{
		triangle_margin = '10px 54px 0 0';
	}
	else if (elem == 'photos')
	{
		triangle_margin = '10px 164px 0 0';
	}
	else if (elem == 'videos')
	{
		triangle_margin = '10px 276px 0 0';
	}
	else if (elem == 'twitter')
	{
		triangle_margin = '10px 389px 0 0';
	}
	else
	{
		triangle_margin = '10px 54px 0 0';
	}
	document.getElementById('triangle').style.margin = triangle_margin;
}