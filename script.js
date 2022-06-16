function World() {
  console.log("Hello World");
}

World();

function Name(Name, lastName) {
  console.log(`My fisrt name is ${Name} and my last name is ${lastName}`);
}

Name("Julio", "Castro");

function aboutMe(Name, Age, Music) {
  console.log(
    `My name is ${Name} and I have ${Age} years-old, my favorite style of music is ${Music}`
  );
}

aboutMe("Julio Castro", 20, "Rock");

function Movie(Movie, Song) {
  console.log(
    `My favorite Movie is ${Movie} and I love that song called ${Song}`
  );
}

Movie("'All the bright places'", "'So Far Away'");

function Triple(Number) {
  return Number * 3;
}

console.log(Triple(20));
