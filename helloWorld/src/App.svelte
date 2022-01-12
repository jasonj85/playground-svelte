<script>
	import ContactCard from './ContactCard.svelte';

	let userName = "Jason";
	let jobTitle = "Web Developer";
	let description = "This is my default profile description on this website."
	let userImage = "https://i.natgeofe.com/k/aa27e94d-8f1d-447e-9dba-15ac242317b0/meerkat-closeup-log.jpg?w=636&h=358"
	let age = 30;
	let submitted = false;

	$: upperCaseName = userName.toUpperCase();
	$: console.log(age);

	function incrementAge() {
		age++;
	};

	function decrementAge() {
		age--;
	};

	function addContact() {
		submitted = true;
	}

	// function updateName(event) {
	// 	name = event.target.value;
	// };

</script>

<style>
	#form {
	  width: 30rem;
	  max-width: 100%;
	}
</style>

<h1>Hello {upperCaseName}!.</h1>
<h2>Currently you're {age} years old.</h2>
<p>To change your age please click the magic spell below.</p>
<button on:click="{incrementAge}">Increase wisdom</button>
<button on:click="{decrementAge}">Foutain of youth</button>
<hr />
<!-- <input type="text" name="firstname" id="firstname" value="{name}" on:input="{updateName}" /> -->
  
  <div id="form">
	<div class="form-control">
	  <label for="userName">User Name</label>
	  <input type="text" bind:value={userName} id="userName" />
	</div>
	<div class="form-control">
	  <label for="jobTitle">Job Title</label>
	  <input type="text" bind:value={jobTitle} id="jobTitle" />
	</div>
	<div class="form-control">
	  <label for="image">Image URL</label>
	  <input type="text" bind:value={userImage} id="image" />
	</div>
	<div class="form-control">
	  <label for="desc">Description</label>
	  <textarea rows="3" bind:value={description} id="desc" />
	</div>
  </div>
  <button on:click="{addContact}">Add Contact Card</button>

{#if submitted}
	<ContactCard {userName} {jobTitle} {description} {userImage} />
{/if}