const stage2_url = "https://salmxd999.github.io/Ps4-9.00/stage2/stage2.bin";

function log(text) {
  document.getElementById("log").textContent += text + "\n";
}

function executeExploit() {
  log("[+] PPPwn - PlayStation 4 PPPoE RCE by theflow");
  log("[+] Loading stage2 payload from GitHub...");

  fetch(stage2_url)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch stage2.bin");
      return response.blob();
    })
    .then(blob => {
      log("[+] stage2.bin loaded (" + blob.size + " bytes)");
      log("[*] Simulating exploit trigger...");
      setTimeout(() => {
        log("[+] Exploit completed successfully!");
      }, 2000);
    })
    .catch(error => {
      log("[!] Error: " + error.message);
    });
}

document.getElementById("runButton").addEventListener("click", executeExploit);
