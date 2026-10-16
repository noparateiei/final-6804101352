# Test Summary

สรุปจากผลการรันจริงใน `reports/results.json` (สร้างอัตโนมัติจาก JSON Report ไม่ได้แก้ไขผลด้วยตนเอง)

- วันที่รัน: 2026-10-16T06:26:18.039Z
- Playwright: 1.64.1
- Browser: chromium
- ระยะเวลารวม: 18.3 s
- ผลรวม: **8 tests — Passed 8 / Failed 0** (expected 8, unexpected 0, flaky 0, skipped 0)

| # | ไฟล์ | Test | ผล | เวลา (ms) |
|---|---|---|---|---|
| 1 | tests/integration/IT-01.spec.ts | IT-01: top-down REAL Login -> browser-level Inventory STUB | ✅ Passed | 3384 |
| 2 | tests/integration/IT-02.spec.ts | IT-02: DRIVER login state -> REAL Inventory and Cart | ✅ Passed | 1495 |
| 3 | tests/system/ST-01.spec.ts | ST-01: complete purchase of two products | ✅ Passed | 2868 |
| 4 | tests/system/ST-02.spec.ts | ST-02: checkout validation and recovery | ✅ Passed | 2544 |
| 5 | tests/unit/UT-01.spec.ts | UT-01.1: empty username and password | ✅ Passed | 1264 |
| 6 | tests/unit/UT-01.spec.ts | UT-01.2: missing password | ✅ Passed | 1403 |
| 7 | tests/unit/UT-01.spec.ts | UT-01.3: invalid login details | ✅ Passed | 1436 |
| 8 | tests/unit/UT-02.spec.ts | UT-02: product button state Add to cart -> Remove -> Add to cart | ✅ Passed | 1556 |

## ข้อผิดพลาดที่พบ

ไม่พบข้อผิดพลาดในการรันครั้งสุดท้าย — ทุก Test Case ผ่าน (Passed)

### หมายเหตุระหว่างการพัฒนา

ในการรันครั้งแรก UT-02 Failed ด้วย `strict mode violation` เนื่องจาก `getByRole('button')` ภายใน Card สินค้าเจอ 3 elements (ลิงก์รูปภาพและลิงก์ชื่อสินค้าของ SauceDemo มี `role="button"`) จึงแก้ Locator เป็น `locator('button')` ซึ่งชี้ไปยังปุ่ม Add to cart / Remove จริงเท่านั้น แล้วรันใหม่ทั้งชุด ผลด้านบนเป็นผลจากการรันครั้งหลัง
