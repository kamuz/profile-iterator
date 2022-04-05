// Profiles data
const data = [
	{
		name: 'John Doe',
		age: 32,
		gender: 'male',
		lokingfor: 'female',
		location: 'Kiev',
		image: 'https://randomuser.me/api/portraits/men/11.jpg',
	},
	{
		name: 'Jane Tee',
		age: 30,
		gender: 'female',
		lokingfor: 'men',
		location: 'Poltava',
		image: 'https://randomuser.me/api/portraits/women/11.jpg',
	},
	{
		name: 'Brad Traversy',
		age: 28,
		gender: 'male',
		lokingfor: 'female',
		location: 'Boston',
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		name: 'Luck Walker',
		age: 36,
		gender: 'male',
		lokingfor: 'female',
		location: 'New York',
		image: 'https://randomuser.me/api/portraits/men/22.jpg',
	},
	{
		name: 'Kelly Poppins',
		age: 21,
		gender: 'female',
		lokingfor: 'male',
		location: 'London',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
];

// Profile iterator
function profileIterator(profiles){
	let nextIndex = 0;

	return {
		next: function(){
			return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done: true};
		}
	}
}

// Init iterator
const profiles = profileIterator(data);

// Next Profile
function nextProfile(){
	const currentProfile = profiles.next().value;

	if ( currentProfile !== undefined ) {
		document.getElementById('profile-display').innerHTML = `
		<ul class="list-group">
			<li class="list-group-item">Name: ${currentProfile.name}</li>
			<li class="list-group-item">Age: ${currentProfile.age}</li>
			<li class="list-group-item">Location: ${currentProfile.location}</li>
			<li class="list-group-item">Preference: ${currentProfile.gender} loking for ${currentProfile.lokingfor}</li>
		</ul>
		`;

		document.getElementById('image-display').innerHTML = `<img src="${currentProfile.image}" alt="${currentProfile.name}">`;
	} else {
		window.location.reload();
	}
}

// Display first profile by default
nextProfile();

// Display next user
document.getElementById('next').addEventListener('click', nextProfile);