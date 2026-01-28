const featureFlags = {
  experimentalGreeting: false
};

// Faz 18: multi-file safe change test
function run() {
  if (featureFlags.experimentalGreeting) {
    console.log("Hello Jarvis (experimental)");
  } else {
    console.log("Hello Jarvis");
  }
}

run();

function noopTest() {
  return "noop";
}
