export type Phrase = {
    id: string,
    data: string,
    context: string
}

const ofData = (id: string, data: string, context: string = "") : Phrase => {
    return {id: id, data: data, context: context}
}

export const phrases = [
    ofData("554704354792177664", "Я выжимал 270 раньше"),
    ofData("554704354792177664", "Играет карту в 67 акки"),
    ofData("554704354792177664", "Я половину дисита проходил"),
    ofData("767489709021986866", "Мне чем бигблег нравится там скорость 10 и выше"),
    ofData("767489709021986866", "Сколько ты бпм выжимаешь максималака"),
    ofData("554704354792177664", "Ну берсты могу и 500"),
    ofData("554704354792177664", "Ну берсты это когда много точек в одном месте"),
    ofData("554704354792177664", "Ну я вот это на ДТшке хочу тут ебучий спам"),
    ofData("767489709021986866", "Скидывает карты ZXC Cursed"),
    ofData("554704354792177664", "Ну самое прикольное что я играл на дт это химеру на дт"),
    ofData("554704354792177664", "Ну я что клоун на B или A играть"),
    ofData("554704354792177664", "Ну нихуя мне 6к пп затирает за C"),
    ofData("571935583329583124", "Мои 200 миллионов на карте такие привет"),
    ofData("571935583329583124", "Пиздец какой гений еще меня пытавлся учить"),
    ofData("726570280864186399", "Кстати никто не знает но я 3 дигит"),
    ofData("726570280864186399", "У меня клава 23 тыщи"),
    ofData("930712298962685982", "Попробуйте мои очки догнать лохи"),
    ofData("930712298962685982", "Я думаю ты 7 стар осилишь, 7.7, 211 бпм"),
    ofData("338755214930739203", "Как же я ебашу на 3000 пп"),
    ofData("338755214930739203", "Ща бы радоваться с 5* ФК"),
    ofData("338755214930739203", "Было бы смешно если бы я сейчас читы врубил и заспидранил бан"),
    ofData("338755214930739203", "Так смотрите все ща будет фк UNITED в 3 мода"),
    ofData("540144509674323968", "Так 230 бпм, 240..."),
    ofData("540144509674323968", "Это мультиакк или мультибес"),
    ofData("308906067675447296", "Всего 237 ты че"),
    ofData("184637657597345804", "8* Джампы сложные? Да нет обычные"),
    ofData("675282088768962591", "Ну мог бы конечно сразу на 10 идти там бы я точно разогрелся"),
    ofData("675282088768962591", "Ну однажды без ноуфейла до дропа проходил"),
    ofData("675282088768962591", "Вот это поинтереснее (включает 10*"),
    ofData("1083949803513315388", "Mirror mirror зафармишь и сразу все уважать будут"),
    ofData("1083949803513315388", "Ну сейв ми это на берсты"),
    ofData("1083949803513315388", "Я на гатари играю"),
    ofData("1083949803513315388", "Ну у меня бан на банчо, у меня бан как только на него зашел"),
    ofData("266156948657799169", "Ну меня на гатари отклонили долбаеб на админах"),
    ofData("987743002522947604", "Ну у тебя карта слишком медленная, я же 8* прошел"),
    ofData("353537745471143941", "Есть карта там чисто 190 бпм стрим 9 минут. Я пасснул там ничего сложного"),
    ofData("353537745471143941", "А, ладно, без курсорданса"),
    ofData("353537745471143941", "А что у меня с мсом"),
    ofData("353537745471143941", "Да бля я с таким мсом играть не могу (у него 2мс)"),
    ofData("353537745471143941", "Так бля у тебя норм 2 мс потому что ты на мышке"),
    ofData("353537745471143941", "Я то играю на планшете у меня стилус подключен не напрямую к планшету"),
    ofData("353537745471143941", "Так потому что у тебя сигналы идут напрямую а у меня через планшет"),
    ofData("353537745471143941", "Блин как бы не перефармить у меня скоро турнир"),
    ofData("353537745471143941", "Смотри я берсты в 300 жму!"),
    ofData("284406362941685761", "В доту зашел? В осу. Это потому что я на мышке играю"),
    ofData("500685579936202752", "Я оффлайн плеер играю на гатари"),
    ofData("787897165463814154", "Для людей 12к пп это много и из-за этого такой респект кидают ? чё за мем сейчас вроде не 2016"),
    ofData("787897165463814154", "Почему 12к пп так любят лоу скилл челики"),
    ofData("787897165463814154", "мем, я за 20 минут перефармить могу их два аккаунта вместе взятых. Че то пукают сидят"),
    ofData("787897165463814154", "или мне по пп снайпануть макса , чтобы они траханье охладили"),
    ofData("591863297276510208", "Хиден научит тебя правильному таймингу нажатию"),
    ofData("591863297276510208", "Правда если с хиденом поиграешь то с обычных кругов плевать будешь"),
    ofData("591863297276510208", "Я играл раньше неплохо дт 220 бпм жал"),
    ofData("591863297276510208", "После того как я сломал на руке все пальцы я теперь только релакс играю"),
    ofData("591863297276510208", "Ты должен 162.5 бпм хотя бы на S прожать"),
    ofData("591863297276510208", "Я просто не могу жать я не восстановился"),
    ofData("591863297276510208", "Берешь запускаешь стрим практис да и все "),
    ofData("591863297276510208", "Я хочу дт опять дать сукаа"),
    ofData("591863297276510208", "там еще АР 9 самый противный"),
    ofData("591863297276510208", "АР 10 самый приятный как по мне"),
    ofData("591863297276510208", "Квадраты не особо сложные треугольники посложнее будут"),
    ofData("591863297276510208", "Научится бы тебе фуллскрины жать"),
    ofData("591863297276510208", "*Показывает полсднее место на акатсуки* Так до сих пор топ держу"),
    ofData("471165284095492116", "То чувство когда раньше 220 жал а сейчас даже 200 не можешь"),
    ofData("819609834860576848", "Интересно на каком стриме я в дисите сдохнул"),
    ofData("819609834860576848", "Это пиздец дисит нельзя пасснуть"),
    ofData("571935583329583124", "Что я творю! Я просто 3 ноты пережал"),
    ofData("571935583329583124", "Твой планшет говно мой планшект 10 стоит"),
    ofData("897935682914361355", "У меня есть шанс вульфа обогнать"),
    ofData("478807201641791509", "Давайте кто лучше сыграет (ставит спам жим 270)"),
    ofData("726570280864186399", "190 BPM слишком медленно."),
    ofData("533764926481891360", "Как играть карты с аром 10.3?"),
    ofData("611201396619870220", "Играть карты с 11 аром"),
    ofData("533764926481891360", "Так я меньше чем 10.3 играю, пытаюсь научится играть ноумод"),
    ofData("285042291109003264", "Ну я то даблтапаю сижу мне по кайфу "),
    ofData("967852343230079117", "На 8* холдить я не буду"),
    ofData("967852343230079117", "Я не знаю как это пробить"),
    ofData("967852343230079117", "Че так мало пп дало че за бред"),
    ofData("967852343230079117", "Саунд химера легкая"),
    ofData("967852343230079117", "Все мои друзбя пасснули"),
    ofData("967852343230079117", "Говорит что она легкая в дт когда даже пасснуть не может"),
    ofData("967852343230079117", "Ща бы хай бпм на вутинге"),
    ofData("725989241280135269", "У меня друг 8* на мышке играет"),
    ofData("725989241280135269", "У него 700 с чем-то пп"),
    ofData("1101460168039989279", "нормальный фонк идет от 4*"),
    ofData("307209526174810112", "да что у меня с осу"),
    ofData("307209526174810112", "только дебил 5* поставит"),
    ofData("307209526174810112", "бля стримы слишком лоубпмные я их пережимаю"),
    ofData("307209526174810112", "я тебя щас догоню и по аккураси выебу"),
    ofData("307209526174810112", "джампы ебаные, а стримы вообще изи"),
    ofData("307209526174810112", "а ну я комбо набрал поэтому обогнал"),
    ofData("307209526174810112", "да почему у меня клавиатура двигается? заебала!"),
    ofData("307209526174810112", "как руку забить чтобы 300 бпм жать?"),
    ofData("405479716687183873", "Кто не разу не банился тот не уважаемый"),
    ofData("307209526174810112", "У меня рука заебалась уже"),
    ofData("820388912312221706", "Так внимание человек с RSI на правой руке ебашит джампы"),
    ofData("820388912312221706", "Сыграл джампо карту 7 звезд в 93%) даже чувство что в аккураси получается"),
    ofData("820388912312221706", "Зайдите на демку кто-нибудь хочу чтобы сказали какой я ахуенный"),
    ofData("820388912312221706", "Ой блять как рука заболела ебучий RSI"),
    ofData("820388912312221706", "Блять как на этом жать ебучий вутинг и кстати вутинг не импрувит"),
    ofData("477105442531573760", "Как играть фул скрин стримы"),
    ofData("572374905879003146", "Блять я в ахуе от маленького АРа (играет обычные 5*)"),
    ofData("572374905879003146", "Для меня обычный АР это от 10"),
    ofData("572374905879003146", "Все пошел короче синглтап. Пошел я нахуй со своим синглтапом"),
    ofData("572374905879003146", "Ебаный лоу бпм (обычная карта), я ваши рты топтал"),
    ofData("488048331742904411", "Оптика срабатывает быстрее"),
    ofData("488048331742904411", "Ну механическая работает неможко иначе чем оптика"),
    ofData("488048331742904411", "Оптика это типа лазер и приемник лазера"),
    ofData("488048331742904411", "А в механике обычно у тебя контакты"),
    ofData("341248936423456769", "Ты стримы то жмешь вообще 220 бпм?"),
    ofData("341248936423456769", "А играешь харумачи кловер? (Да) Понятно долбаеб не разговаривай со мной вообще"),
    ofData("767729246331338782", "Ну если чел в релаксе играет мне вообще на него похуй"),
    ofData("739584040738357299", "Ты знаешь какая у меня сенса? Я сейчас на чикони."),
    ofData("739584040738357299", "Можно не умирать сразу?"),
    ofData("739584040738357299", "Разминка? Не - не слышали такое"),
    ofData("739584040738357299", "Как привыкнуть к сенсе чикони я не понимаю!")
]

phrases.sort((x, y) => Number(x.id) - Number(y.id))