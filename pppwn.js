function runExploit() {
  const output = document.getElementById("output");
  output.textContent = "[+] بدء تنفيذ PPPwn...\n";

  const stage2 = document.getElementById("stage2").files[0];

  if (!stage2) {
    output.textContent += "[!] يرجى رفع stage2.bin\n";
    return;
  }

  output.textContent += "[+] تم رفع stage2: " + stage2.name + "\n";
  output.textContent += "[✓] تم التجهيز - بإمكانك الآن دمج السكربت مع backend لتشغيل PPPwn فعليًا\n";
}
