const demographicFile = "\n<h1>لطفا به عنوان آخرین مرحله، به سوالات زیر  پاسخ  دهید </h1>\n\n<br>\n\n.1&nbsp;&nbsp;سن؟ <br>\n\n<input id=\"age\" type=\"text\" name=\"age\" value=\"\" /><br />\n\n<br>\n\n.2&nbsp;&nbsp;جنسیت؟<br>\n\n<select id=\"gender\" name =\"gender\">\n\n    <option value=\"\">یکی را انتخاب کنید</option>\n\n     <option value=\"male\">مرد</option>\n\n     <option value=\"female\">زن</option>\n\n</select><br>\n\n<br>\n\n.3&nbsp;&nbsp; زبان مادری شما چیست؟<br>\n<select id=\"language\" name =\"language\">\n\n    <option value=\"\">یکی را انتخاب کنید</option>\n\n    <option value=\"farsi\">فارسی</option>\n\n    <option value=\"other\">غیره</option>\n\n</select><br>\n\n<br>\n\n.4&nbsp;&nbsp; چند سال به این زبان  گفتگو کرده اید؟<br>\n\n<input id=\"yrs_spoken\" type=\"text\" name=\"yrs_spoken\" value=\"\" /><br />\n\n<br>\n\n.5&nbsp;&nbsp; آیا شما دو زبانه هستید؟<br>\n<input type=\"hidden\" id=\"bifluent\" name=\"bifluent\" value=\"\">\n\n<select id=\"bilingual\" name =\"bilingual\">\n\n    <option value=\"\">یکی را انتخاب کنید</option>\n\n     <option value=\"yes\">بله</option>\n\n     <option value=\"no\">خیر</option>\n\n</select><br>\n\n<br>\n\n.6&nbsp;&nbsp;  چقدر در صحبت کردن، خواندن، و نوشتن زبان خود مهارت دارید؟<br>\n(شماره 5= اصلا به زبان تسلط ندارد، شماره 1= مانند زبان مادری تسلط دارد )<br>\n\n<input type=\"radio\" id=\"bifluent\" name=\"bifluent\" value=\"1\" onclick = \"on_selection1(this)\">&nbsp;1\n\n<input type=\"radio\" id=\"bifluent\" name=\"bifluent\" value=\"2\" onclick = \"on_selection1(this)\">&nbsp;2\n\n<input type=\"radio\" id=\"bifluent\" name=\"bifluent\" value=\"3\" onclick = \"on_selection1(this)\">&nbsp;3\n\n<input type=\"radio\" id=\"bifluent\" name=\"bifluent\" value=\"4\" onclick = \"on_selection1(this)\">&nbsp;4\n\n<input type=\"radio\" id=\"bifluent\" name=\"bifluent\" value=\"5\" onclick = \"on_selection1(this)\">&nbsp;5<br>\n\n<br>\n\n.7&nbsp;&nbsp; ملیت شما چیست؟<br>\n\n<select id=\"nationality\" name =\"nationality\">\n\n    <option value=\"\">یکی را انتخاب کنید</option>\n\n    <option value=\"us\">آمریکایی</option>\n\n    <option value=\"other\">غیره</option>\n\n</select><br>\n\n<br>\n\n.8&nbsp;&nbsp; آبه کدام گروه  سیاسی زیر وابستگی دارید؟<br>\n<select id=\"politics\" name =\"politics\">\n\n    <option value=\"\">یکی را انتخاب کنید</option>\n\n    <option value=\"PMOI\">سازمان مجاهدین خلق ایران</option>\n\n    <option value=\"KDPI\">حزب دموکرات کردستان ایران</option>\n\n    <option value=\"HAKA\">حزب کونیست ایران</option>\n\n    <option value=\"Reform Front\">اصلاح طلبان</option>\n\n    <option value=\"Green Movement”> جنبش سبز</option>\n\n    <option value=\"other\">غیره</option>\n\n</select><br>\n\n<br>\n\n.9&nbsp;&nbsp; آیا پدر و مادر شما در آمریکا متولد شده اند؟<br>\n\n<select id=\"nativeparents\" name =\"nativeparents\">\n\n    <option value=\"\">یکی را انتخاب کنید</option>\n\n     <option value=\"yes\">بله</option>\n\n     <option value=\"no\">خیر</option>\n\n</select><br>\n\n<br>\n\n.10&nbsp;&nbsp; ایا شما در آمریکا متولد شده اید؟<br>\n\n<select id=\"bornhere\" name =\"bornhere\">\n\n    <option value=\"\">یکی را انتخاب کنید</option>\n\n     <option value=\"yes\">بله</option>\n\n     <option value=\"nno\">خیر</option>\n\n</select><br>\n\n<br>\n\n.11&nbsp;&nbsp;در حال حاضر کجا زندگی می کنید؟<br>\n\n<select id=\"livein\" name =\"livein\">\n\n    <option value=\"\">یکی را انتخاب کنید</option>\n\n     <option value=\"usa\">آمریکا</option>\n\n     <option value=\"other\">غیره</option>\n\n</select><br>\n\n<br>\n\n.12&nbsp;&nbsp; چند سال است در این کشور زندگی می کنید ؟<br>\n\n<input id=\"yrs_in_country\" type=\"text\" name=\"yrs_in_country\" value=\"\" /><br />\n\n<br>\n\n.13&nbsp;&nbsp; ومیت شما چیست ؟<br>\n\n<select id=\"ethnicity\" name =\"ethnicity\">\n\n    <option value=\"\">یکی را انتخاب کنید</option>\n\n    <option value=\"turk\">آذری</option>\n\n    <option value=\"kurd\">کرد</option>\n\n    <option value=\"arab\">خوزستانی عرب</option>\n\n    <option value=\"balooch\">بلوچ</option>\n\n    <option value=\"other\">غیره</option>\n\n</select><br>\n\n<br>\n\n.14&nbsp;&nbsp; مذهب شما چیست ؟<br>\n\n<select id=\"religion\" name =\"religion\">\n\n    <option value=\"\">کی را انتخاب کنید</option>\n\n    <option value=\"christianity\">مسیحیت</option>\n\n    <option value=\"islam\">اسلام</option>\n\n    <option value=\"judaism\">یهودیت</option>\n\n    <option value=\"Bahaii\"> بهاییت/option>\n\n    <option value=\"Zorostrian\">زرتشتی</option>    \n\n    <option value=\"atheism\">لا مذهب</option>    \n\n    <option value=\"other\">غیره</option>\n\n</select><br>\n\n<br>\n\n.15&nbsp;&nbsp; شرایط اقتصادی خود را در مقایسه با دیگران چگونه ارزیابی می کنید ؟<br>\n\n&#40;شماره 5= بسیار پایین تر از اغلب مردم، شماره 1= بسیار بالا تر از اغلب مردم &nbsp;&#41;<br>\n\n<input type=\"radio\" id=\"econ_status\" name=\"econ_status\" value=\"1\" onclick = \"on_selection2(this)\">&nbsp;1\n\n<input type=\"radio\" id=\"econ_status\" name=\"econ_status\" value=\"2\" onclick = \"on_selection2(this)\">&nbsp;2\n\n<input type=\"radio\" id=\"econ_status\" name=\"econ_status\" value=\"3\" onclick = \"on_selection2(this)\">&nbsp;3\n\n<input type=\"radio\" id=\"econ_status\" name=\"econ_status\" value=\"4\" onclick = \"on_selection2(this)\">&nbsp;4\n\n<input type=\"radio\" id=\"econ_status\" name=\"econ_status\" value=\"5\" onclick = \"on_selection2(this)\">&nbsp;5<br>\n\n<br>\n\n.16&nbsp;&nbsp; شغل شما چیست ؟<br>\n\n<input id=\"occupation\" type=\"text\" name=\"occupation\" value=\"\" /><br />\n\n<br>\n\n.17&nbsp;&nbsp; میزان تحصیلات شما چقدر است ؟<br>\n<select id=\"education\" name =\"education\">\n\n    <option value=\"\">کی را انتخاب کنید</option>\n\n    <option value=\"none\">تحصیلات آکادمیک ندارد</option>\n\n    <option value=\"elementary\">ابتدایی</option>\n\n    <option value=\"secondary\">دیپلم</option>\n\n    <option value=\"college\">فوق دیپلم</option>\n\n    <option value=\"BA/BS\">لیسانس</option>\n\n    <option value=\"graduate\">فوق یا دکترا &#40;example&#58; M.S., Ph.D.&#41;</option>\n\n    <option value=\"other\">غیره</option>\n\n</select><br>\n\n</div>";