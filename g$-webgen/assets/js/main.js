$('#generator').submit(function(e) {
	e.preventDefault();
});

$('#generate').click(function() {
	let account_type = document.getElementById('type').value;

	if (account_type === 'Minecraft') {
		Pace.restart();
		$.ajax({
			type: 'GET',
			dataType: 'text',
			url: 'api/generate.php?type=Minecraft',
			success: function(data) {
				Swal.fire({
					type: 'success',
					title: 'aqui ta tua conta cumpade',
					text: data
				});
			}
		});
	} else if (account_type === 'Spotify') {
		Pace.restart();
		$.ajax({
			type: 'GET',
			dataType: 'text',
			url: 'api/generate.php?type=Spotify',
			success: function(data) {
				Swal.fire({
					type: 'success',
					title: 'aqui ta tua conta cumpade',
					text: data
				});
			}
		});
	} else if (account_type === 'Netflix') {
		Pace.restart();
		$.ajax({
			type: 'GET',
			dataType: 'text',
			url: 'api/generate.php?type=Netflix',
			success: function(data) {
				Swal.fire({
					type: 'success',
					title: 'aqui ta tua conta cumpade',
					text: data
				});
			}
		});
	} else {
		Pace.restart();
		Swal.fire({
			type: 'error',
			title: 'Error',
			text: 'te fude tu escolheu errado.'
		});
	}
});
