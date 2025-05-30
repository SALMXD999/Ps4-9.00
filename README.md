# 4GAMER PSFree 9.00

![Version](https://img.shields.io/badge/Version-1.6.0-blue.svg)
![Firmware](https://img.shields.io/badge/Firmware-9.00-green.svg)
![Status](https://img.shields.io/badge/Status-Stable-success.svg)

## نظرة عامة

مشروع 4GAMER PSFree هو نسخة محسنة ومطورة من مشروع PSFree الأصلي، يوفر ثغرة لنظام PS4 إصدار 9.00 بدون الحاجة إلى فلاش USB. يتميز بواجهة مستخدم محسنة وخلفية برمجية متحركة وتحسينات في الاستقرار والأداء.

## المميزات

- **بدون فلاش USB**: الثغرة الجديدة لا تحتاج إلى فلاش USB
- **واجهة مستخدم محسنة**: تصميم عربي سهل الاستخدام
- **خلفية برمجية متحركة**: خلفية احترافية متحركة بدلاً من الصورة الثابتة
- **تخزين مؤقت محسن**: آلية تخزين مؤقت محسنة للصفحة
- **استقرار محسن**: تحسينات ABC Fix لزيادة استقرار الثغرة
- **سرعة عالية**: تحسينات أداء متعددة

## التحديثات الأخيرة

- اعتماد كامل على مشروع kmeps4/PSFree لتحسين الاستقرار
- تطوير خلفية برمجية متحركة احترافية بدلاً من الصورة الثابتة
- تحسين آلية التخزين المؤقت للصفحة
- زيادة عدد طلبات الحجب من 2 إلى 6 (ABC Fix)
- Some performance Tweaks add
- Add sysveri Patch

## المكونات الرئيسية

* **Exploits**
  * PSFree: psfree.mjs
  * Lapse (kernel): lapse.mjs
* **Patches**
  * kpatch/900.elf
  * kpatch/900.c
  * kpatch/types.h
  * kpatch/utils.h
* **ROP Chains**
  * rop/900.mjs

## الاستخدام

1. افتح المتصفح على جهاز PS4
2. انتقل إلى عنوان الموقع
3. في حال ظهور أي واجهة تحتوي على زر "موافق" أو "إغلاق الصفحة"، قم بالضغط على "موافق" بدون تردد
4. انتظر حتى اكتمال تثبيت التخزين المؤقت بنسبة 100%
5. بعد اكتمال التثبيت، أغلق المتصفح وافتحه مرة أخرى للاستخدام بدون إنترنت

## المساهمة

PR are welcome

## التبرعات

Donation (Monero/XMR):
86Fk3X9AE94EGKidzRbvyiVgGNYD3qZnuKNq1ZbsomFWXHYm6TtAgz9GNGitPWadkS3Wr9uXoT29U1SfdMtJ7QNKQpW1CVS

## حقوق النشر والمؤلفون

AGPL-3.0-or-later (see COPYING). This repo belongs to the group
`anonymous`. We refer to anonymous contributors as "anonymous" as well.

## الاعتمادات والشكر

- Jhon https://github.com/janisslsm
- SiSTR0 https://github.com/SiSTR0
- CTN https://github.com/ctn123
- Al-Azif https://github.com/al-azif
- abc for PSFree webkit exploit & Lapse kernel Exploit
- Chendochap https://github.com/ChendoChap
- kameleonre.. for porting and chaining psfree + lapse on ps4 9.00 :P
- 4GAMER for UI improvements and stability enhancements
- kmeps4 for stability improvements and ABC Fix
