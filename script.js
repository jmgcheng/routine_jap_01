// Hiragana and Katakana Dictionaries
const hiraganaDictionary = [
    {'char': 'あ', 'romaji': 'a'}, {'char': 'い', 'romaji': 'i'}, {'char': 'う', 'romaji': 'u'}, {'char': 'え', 'romaji': 'e'}, {'char': 'お', 'romaji': 'o'}, 
    {'char': 'か', 'romaji': 'ka'}, {'char': 'き', 'romaji': 'ki'}, {'char': 'く', 'romaji': 'ku'}, {'char': 'け', 'romaji': 'ke'}, {'char': 'こ', 'romaji': 'ko'}, 
    {'char': 'さ', 'romaji': 'sa'}, {'char': 'し', 'romaji': 'shi'}, {'char': 'す', 'romaji': 'su'}, {'char': 'せ', 'romaji': 'se'}, {'char': 'そ', 'romaji': 'so'}, 
    {'char': 'た', 'romaji': 'ta'}, {'char': 'ち', 'romaji': 'chi'}, {'char': 'つ', 'romaji': 'tsu'}, {'char': 'て', 'romaji': 'te'}, {'char': 'と', 'romaji': 'to'}, 
    {'char': 'な', 'romaji': 'na'}, {'char': 'に', 'romaji': 'ni'}, {'char': 'ぬ', 'romaji': 'nu'}, {'char': 'ね', 'romaji': 'ne'}, {'char': 'の', 'romaji': 'no'}, 
    {'char': 'は', 'romaji': 'ha'}, {'char': 'ひ', 'romaji': 'hi'}, {'char': 'ふ', 'romaji': 'fu'}, {'char': 'へ', 'romaji': 'he'}, {'char': 'ほ', 'romaji': 'ho'}, 
    {'char': 'ま', 'romaji': 'ma'}, {'char': 'み', 'romaji': 'mi'}, {'char': 'む', 'romaji': 'mu'}, {'char': 'め', 'romaji': 'me'}, {'char': 'も', 'romaji': 'mo'}, 
    {'char': 'や', 'romaji': 'ya'}, {'char': 'ゆ', 'romaji': 'yu'}, {'char': 'よ', 'romaji': 'yo'}, 
    {'char': 'ら', 'romaji': 'ra'}, {'char': 'り', 'romaji': 'ri'}, {'char': 'る', 'romaji': 'ru'}, {'char': 'れ', 'romaji': 're'}, {'char': 'ろ', 'romaji': 'ro'}, 
    {'char': 'わ', 'romaji': 'wa'}, {'char': 'ゐ', 'romaji': 'wi'}, {'char': 'ゑ', 'romaji': 'we'}, {'char': 'を', 'romaji': 'wo'},
    {'char': 'ん', 'romaji': 'n'}
];

const katakanaDictionary = [
    {'char': 'ア', 'romaji': 'a'}, 	{'char': 'イ', 'romaji': 'i'}, 	{'char': 'ウ', 'romaji': 'u'}, 		{'char': 'エ', 'romaji': 'e'}, 	{'char': 'オ', 'romaji': 'o'}, 
    {'char': 'カ', 'romaji': 'ka'}, 	{'char': 'キ', 'romaji': 'ki'}, 	{'char': 'ク', 'romaji': 'ku'}, 		{'char': 'ケ', 'romaji': 'ke'}, 	{'char': 'コ', 'romaji': 'ko'}, 
    {'char': 'サ', 'romaji': 'sa'}, 	{'char': 'シ', 'romaji': 'shi'}, {'char': 'ス', 'romaji': 'su'}, 		{'char': 'セ', 'romaji': 'se'}, 	{'char': 'ソ', 'romaji': 'so'}, 
    {'char': 'タ', 'romaji': 'ta'}, 	{'char': 'チ', 'romaji': 'chi'}, {'char': 'ツ', 'romaji': 'tsu'}, 	{'char': 'テ', 'romaji': 'te'}, 	{'char': 'ト', 'romaji': 'to'}, 
    {'char': 'ナ', 'romaji': 'na'}, 	{'char': 'ニ', 'romaji': 'ni'}, 	{'char': 'ヌ', 'romaji': 'nu'}, 		{'char': 'ネ', 'romaji': 'ne'}, 	{'char': 'ノ', 'romaji': 'no'}, 
    {'char': 'ハ', 'romaji': 'ha'}, 	{'char': 'ヒ', 'romaji': 'hi'}, 	{'char': 'フ', 'romaji': 'fu'}, 		{'char': 'ヘ', 'romaji': 'he'}, 	{'char': 'ホ', 'romaji': 'ho'}, 
    {'char': 'マ', 'romaji': 'ma'}, 	{'char': 'ミ', 'romaji': 'mi'}, 	{'char': 'ム', 'romaji': 'mu'}, 		{'char': 'メ', 'romaji': 'me'}, 	{'char': 'モ', 'romaji': 'mo'}, 
    {'char': 'ヤ', 'romaji': 'ya'}, 	{'char': 'ユ', 'romaji': 'yu'}, 	{'char': 'ヨ', 'romaji': 'yo'}, 
    {'char': 'ラ', 'romaji': 'ra'}, 	{'char': 'リ', 'romaji': 'ri'}, 	{'char': 'ル', 'romaji': 'ru'}, 		{'char': 'レ', 'romaji': 're'}, 	{'char': 'ロ', 'romaji': 'ro'}, 
    {'char': 'ワ', 'romaji': 'wa'}, 	{'char': 'ヲ', 'romaji': 'wo'},
    {'char': 'ン', 'romaji': 'n'}
];

// const etcDictionary = [
//     {'char': '見', 'romaji': 'mi'}, 
// ];

// Sample Game Card Data
let gameCardsHiragana1 = [{'jap': 'あ', 'eng': 'a'}, {'jap': 'い', 'eng': 'i'}, {'jap': 'う', 'eng': 'u'}, {'jap': 'え', 'eng': 'e'}, {'jap': 'お', 'eng': 'o'}, ]
let gameCardsHiragana2 = [{'jap': 'か', 'eng': 'ka'}, {'jap': 'き', 'eng': 'ki'}, {'jap': 'く', 'eng': 'ku'}, {'jap': 'け', 'eng': 'ke'}, {'jap': 'こ', 'eng': 'ko'}, ]
let gameCardsHiragana3 = [{'jap': 'さ', 'eng': 'sa'}, {'jap': 'し', 'eng': 'shi'}, {'jap': 'す', 'eng': 'su'}, {'jap': 'せ', 'eng': 'se'}, {'jap': 'そ', 'eng': 'so'}, ]
let gameCardsHiragana4 = [{'jap': 'た', 'eng': 'ta'}, {'jap': 'ち', 'eng': 'chi'}, {'jap': 'つ', 'eng': 'tsu'}, {'jap': 'て', 'eng': 'te'}, {'jap': 'と', 'eng': 'to'}, ]
let gameCardsHiragana5 = [{'jap': 'な', 'eng': 'na'}, {'jap': 'に', 'eng': 'ni'}, {'jap': 'ぬ', 'eng': 'nu'}, {'jap': 'ね', 'eng': 'ne'}, {'jap': 'の', 'eng': 'no'}, ]
let gameCardsHiragana6 = [{'jap': 'は', 'eng': 'ha'}, {'jap': 'ひ', 'eng': 'hi'}, {'jap': 'ふ', 'eng': 'fu'}, {'jap': 'へ', 'eng': 'he'}, {'jap': 'ほ', 'eng': 'ho'}, ]
let gameCardsHiragana7 = [{'jap': 'ま', 'eng': 'ma'}, {'jap': 'み', 'eng': 'mi'}, {'jap': 'む', 'eng': 'mu'}, {'jap': 'め', 'eng': 'me'}, {'jap': 'も', 'eng': 'mo'}, ]
let gameCardsHiragana8 = [{'jap': 'や', 'eng': 'ya'}, {'jap': 'ゆ', 'eng': 'yu'}, {'jap': 'よ', 'eng': 'yo'}, ]
let gameCardsHiragana9 = [{'jap': 'ら', 'eng': 'ra'}, {'jap': 'り', 'eng': 'ri'}, {'jap': 'る', 'eng': 'ru'}, {'jap': 'れ', 'eng': 're'}, {'jap': 'ろ', 'eng': 'ro'}, ]
let gameCardsHiragana10 = [{'jap': 'わ', 'eng': 'wa'}, {'jap': 'ゐ', 'eng': 'wi'}, {'jap': 'ゑ', 'eng': 'we'}, {'jap': 'を', 'eng': 'wo'},]
let gameCardsHiragana11 = [{'jap': 'ん', 'eng': 'n'}]

let gameCardsKatakana1 = [{'jap': 'ア', 'eng': 'a'}, 	{'jap': 'イ', 'eng': 'i'}, 	{'jap': 'ウ', 'eng': 'u'}, 		{'jap': 'エ', 'eng': 'e'}, 	{'jap': 'オ', 'eng': 'o'}, ]
let gameCardsKatakana2 = [{'jap': 'カ', 'eng': 'ka'}, 	{'jap': 'キ', 'eng': 'ki'}, 	{'jap': 'ク', 'eng': 'ku'}, 		{'jap': 'ケ', 'eng': 'ke'}, 	{'jap': 'コ', 'eng': 'ko'}, ]
let gameCardsKatakana3 = [{'jap': 'サ', 'eng': 'sa'}, 	{'jap': 'シ', 'eng': 'shi'}, {'jap': 'ス', 'eng': 'su'}, 		{'jap': 'セ', 'eng': 'se'}, 	{'jap': 'ソ', 'eng': 'so'}, ]
let gameCardsKatakana4 = [{'jap': 'タ', 'eng': 'ta'}, 	{'jap': 'チ', 'eng': 'chi'}, {'jap': 'ツ', 'eng': 'tsu'}, 	{'jap': 'テ', 'eng': 'te'}, 	{'jap': 'ト', 'eng': 'to'}, ]
let gameCardsKatakana5 = [{'jap': 'ナ', 'eng': 'na'}, 	{'jap': 'ニ', 'eng': 'ni'}, 	{'jap': 'ヌ', 'eng': 'nu'}, 		{'jap': 'ネ', 'eng': 'ne'}, 	{'jap': 'ノ', 'eng': 'no'}, ]
let gameCardsKatakana6 = [{'jap': 'ハ', 'eng': 'ha'}, 	{'jap': 'ヒ', 'eng': 'hi'}, 	{'jap': 'フ', 'eng': 'fu'}, 		{'jap': 'ヘ', 'eng': 'he'}, 	{'jap': 'ホ', 'eng': 'ho'}, ]
let gameCardsKatakana7 = [{'jap': 'マ', 'eng': 'ma'}, 	{'jap': 'ミ', 'eng': 'mi'}, 	{'jap': 'ム', 'eng': 'mu'}, 		{'jap': 'メ', 'eng': 'me'}, 	{'jap': 'モ', 'eng': 'mo'}, ]
let gameCardsKatakana8 = [{'jap': 'ヤ', 'eng': 'ya'}, 	{'jap': 'ユ', 'eng': 'yu'}, 	{'jap': 'ヨ', 'eng': 'yo'}, ]
let gameCardsKatakana9 = [{'jap': 'ラ', 'eng': 'ra'}, 	{'jap': 'リ', 'eng': 'ri'}, 	{'jap': 'ル', 'eng': 'ru'}, 		{'jap': 'レ', 'eng': 're'}, 	{'jap': 'ロ', 'eng': 'ro'}, ]
let gameCardsKatakana10 = [{'jap': 'ワ', 'eng': 'wa'}, 	{'jap': 'ヲ', 'eng': 'wo'},]
let gameCardsKatakana11 = [{'jap': 'ン', 'eng': 'n'}]


let gameCardsPt1 = [
    {'jap': 'こんばんは', 'eng': 'tonight, good evening, this evening'}, 	
    {'jap': 'なおみ', 'eng': 'Naomi'}, 	
    {'jap': 'はな', 'eng': 'flowers, flower, Hana'}, 	
    {'jap': 'どうぞよろしく', 'eng': 'nice to meet you'}, 	
    {'jap': 'こんにちは', 'eng': 'hello, hi'}, 	
    {'jap': 'けん', 'eng': 'Ken, ticket'}, 	
    {'jap': 'がくせい', 'eng': 'student, students'}, 	
    {'jap': 'ひと', 'eng': 'person, people'}, 	
    {'jap': 'かっこいい', 'eng': 'cool, good-looking, stylish'}, 	
    {'jap': 'べんごし', 'eng': 'lawyer, lawyers'}, 	
    {'jap': 'やさしい', 'eng': 'kind, easy, nice'}, 	
    {'jap': 'せんせい', 'eng': 'teacher, Professor, teachers'}, 	
    {'jap': 'いしゃ', 'eng': 'doctor, doctors'}, 	
    {'jap': 'です', 'eng': "there is, it's, I'm"}, 	
    {'jap': 'と', 'eng': 'and, that, door'}, 	
    {'jap': 'みず', 'eng': 'water'}, 	
    {'jap': 'ごはん', 'eng': 'rice, meal, meals'}, 	
    {'jap': 'すし', 'eng': 'sushi'}, 	
    {'jap': 'ください', 'eng': 'please'}, 	
    {'jap': 'おちゃ', 'eng': 'green teas, green tea, tea'}, 
];

let gameCardsPt2 = [
    {'jap': 'ブラジルじん', 'eng': "Brazilian"},	
    {'jap': 'イギリスじん', 'eng': "British"},	
    {'jap': 'ブラジル', 'eng': "Brazil"},	
    {'jap': 'イギリス', 'eng': "Britain, the United Kingdom, British"},	
    {'jap': 'にほんじん', 'eng': "Japanese"},	
    {'jap': 'カナダ', 'eng': "Canada"},	
    {'jap': 'アメリカじん', 'eng': "American"},	
    {'jap': 'カナダじん', 'eng': "Canadian"},	
    {'jap': 'アメリカ', 'eng': "America, the USA, the US"},	
    {'jap': 'ちいさい', 'eng': "small, little"},	
    {'jap': 'にほん', 'eng': "Japan"},	
    {'jap': 'おおきい', 'eng': "big, large"},	
    {'jap': 'か', 'eng': "or, is it?, that"},	
    {'jap': 'いいえ', 'eng': "no"},	
    {'jap': 'はい', 'eng': "yes"},	
    {'jap': 'ケーキ', 'eng': "cake"},	
    {'jap': 'ピザ', 'eng': "pizza"},	
    {'jap': 'それ', 'eng': "that (one), it, that"},	
    {'jap': 'これ', 'eng': "this (one), these, this"},	
    {'jap': 'ラーメン', 'eng': "ramen"},	
    {'jap': 'おいしい', 'eng': "good, delicious, tasty"},	
    {'jap': 'は', 'eng': "is, with, regarding"},	
    {'jap': 'カレー', 'eng': "curry"},	
    {'jap': 'またあした', 'eng': "see you tomorrow"},	
    {'jap': 'じゃあね', 'eng': "bye"},	
    {'jap': 'さん', 'eng': "Mr., Miss, Mrs."},
];

let gameCardsPt3 = [
    {'jap': 'その', 'eng': "the, that, its"},	
    {'jap': 'かわいい', 'eng': "cuter, cute, pretty"},	
    {'jap': 'あかるい', 'eng': "bright, cheerful, well-lit"},	
    {'jap': 'たなか', 'eng': "Tanaka"},	
    {'jap': 'この', 'eng': "this, these"},	
    {'jap': 'なかやま', 'eng': "Nakayama"},	
    {'jap': 'それら', 'eng': "they, them, those"},	
    {'jap': 'これら', 'eng': "these"},	
    {'jap': 'くつ', 'eng': "shoes, shoe"},	
    {'jap': 'しろい', 'eng': "white"},	
    {'jap': 'コート', 'eng': "coat"},	
    {'jap': 'あかい', 'eng': "red"},	
    {'jap': 'わたしの', 'eng': "my, mine"},	
    {'jap': 'かさ', 'eng': "umbrella, umbrellas"},	
    {'jap': 'ぼうし', 'eng': "hat, hats"},	
    {'jap': 'そこ', 'eng': "there"},	
    {'jap': 'だいがく', 'eng': "university, college"},	
    {'jap': 'えき', 'eng': "station, train station, stations"},	
    {'jap': 'デパート', 'eng': "department store"},	
    {'jap': 'ここ', 'eng': "here"},	
    {'jap': 'バスてい', 'eng': "bus stop"},	
    {'jap': 'ホテル', 'eng': "hotel"},	
    {'jap': 'コンビニ', 'eng': "convenience store"},	
    {'jap': 'どこ', 'eng': "where"},
];

let gameCardsPt4 = [
    {'jap': 'の', 'eng': "for, 's, one"},	
    {'jap': 'スマホ', 'eng': "smartphone"},	
    {'jap': 'ちず', 'eng': "map"},	
    {'jap': 'きっぷ', 'eng': "ticket"},	
    {'jap': 'じゃないです', 'eng': "is not, we're not, aren't"},	
    {'jap': 'ちかてつ', 'eng': "subway"},	
    {'jap': 'くうこう', 'eng': "airport"},	
    {'jap': 'はん', 'eng': "thirty"},	
    {'jap': 'すみません', 'eng': "excuse me"},	
    {'jap': 'ごろ', 'eng': "around, about"},	
    {'jap': 'いま', 'eng': "now, current"},	
    {'jap': '一', 'eng': "one, an, a"},	
    {'jap': '二', 'eng': "two, 2"},	
    {'jap': 'なんじ', 'eng': "what time"},	
    {'jap': '三', 'eng': "3, three, third"},	
    {'jap': 'じ', 'eng': "o'clock"},	
    {'jap': 'に', 'eng': "to, in, as (a)"},	
    {'jap': 'いち', 'eng': "one, an"},	
    {'jap': 'やまぐち', 'eng': "Yamaguchi"},	
    {'jap': 'おもしろい', 'eng': "interesting, fun, funny"},
];

let gameCardsPt5 = [
    {'jap': 'まち', 'eng': "town, wait, city"},	
    {'jap': 'とても', 'eng': "very"},	
    {'jap': 'きれい', 'eng': "clean"},	
    {'jap': 'しずか', 'eng': "quiet"},	
    {'jap': 'トロント', 'eng': "Toronto"},	
    {'jap': 'にぎやか', 'eng': "lively"},	
    {'jap': 'とし', 'eng': "years, cities, city"},	
    {'jap': 'どう', 'eng': "how (about), what, how"},	
    {'jap': '日本', 'eng': "Japan, Japanese"},	
    {'jap': 'おおさか', 'eng': "Osaka"},	
    {'jap': '京都', 'eng': "Kyoto"},	
    {'jap': 'にすんでいます', 'eng': "is living"},	
    {'jap': 'ニューヨーク', 'eng': "New York"},	
    {'jap': 'も', 'eng': "even, any, also"},	
    {'jap': 'しゅっしん', 'eng': "from, origin, hometown"},	
    {'jap': '東京', 'eng': "Tokyo"},	
    {'jap': '私', 'eng': "I"},	
    {'jap': 'ようこそ', 'eng': "welcome"},	
    {'jap': 'おはようございます', 'eng': "good morning"},	
    {'jap': 'はじめまして', 'eng': "nice to meet you, how do you do"},	
    {'jap': 'おなまえは', 'eng': "what's your name"},	
    {'jap': 'かばん', 'eng': "bag"},	
    {'jap': '中山', 'eng': "Nakayama"},	
    {'jap': '田中', 'eng': "Tanaka"},	
    {'jap': '山口', 'eng': "Yamaguchi"},	
    {'jap': 'パスポート', 'eng': "passport"}, 
];

let gameCardsPt6 = [
    {'jap': 'おっと', 'eng': "my husband"},	
    {'jap': '七', 'eng': "7, seven, seventh"},	
    {'jap': 'あたまがいい', 'eng': "smart"},	
    {'jap': 'むすこ', 'eng': "my son"},	
    {'jap': 'おしゃれ', 'eng': "fashionable, stylish, well-dressed"},	
    {'jap': 'むすめ', 'eng': "my daughter"},	
    {'jap': '六', 'eng': "six"},	
    {'jap': 'つま', 'eng': "my wife"},	
    {'jap': 'だいがくせい', 'eng': "college student"},	
    {'jap': 'ゆうめい', 'eng': "famous"},	
    {'jap': 'かんごし', 'eng': "nurse"},	
    {'jap': 'おとうと', 'eng': "my younger brother"},	
    {'jap': 'うるさい', 'eng': "noisy"},	
    {'jap': '五', 'eng': "5, five"},	
    {'jap': 'あに', 'eng': "my older brother"},	
    {'jap': 'かいしゃいん', 'eng': "office worker"},	
    {'jap': 'あね', 'eng': "my older sister"},	
    {'jap': '四', 'eng': "four"},	
    {'jap': 'いもうと', 'eng': "my younger sister"},	
    {'jap': 'さい', 'eng': "years old"},	
    {'jap': 'いそがしい', 'eng': "busy"},	
    {'jap': 'エンジニア', 'eng': "engineer"},	
    {'jap': '父', 'eng': "dad"},	
    {'jap': 'かぞく', 'eng': "family"},	
    {'jap': '母', 'eng': "mom, mother, my mom"},
];

let gameCardsPt7 = [
    {'jap': 'ばんごはん', 'eng': "dinner"},	
    {'jap': 'まいばん', 'eng': "every night"},	
    {'jap': '九時', 'eng': "nine o'clock"},	
    {'jap': '半', 'eng': "thirty"},	
    {'jap': '八', 'eng': "eight"},	
    {'jap': 'べんとう', 'eng': "boxed lunch"},	
    {'jap': 'ひるごはん', 'eng': "lunch"},	
    {'jap': '十二', 'eng': "twelve"},	
    {'jap': '十', 'eng': "ten"},	
    {'jap': '十一', 'eng': "eleven"},	
    {'jap': 'あさごはん', 'eng': "breakfast"},	
    {'jap': '七時', 'eng': "seven o'clock"},	
    {'jap': '時', 'eng': "o'clock"},	
    {'jap': 'コーヒー', 'eng': "coffee"},	
    {'jap': 'まいあさ', 'eng': "every morning"},	
    {'jap': 'のみます', 'eng': "drink, drinks, (will) drink"},	
    {'jap': 'ジュース', 'eng': "juice"},	
    {'jap': 'まいにち', 'eng': "every day"},	
    {'jap': 'パン', 'eng': "bread"},	
    {'jap': 'サンドイッチ', 'eng': "sandwich"},	
    {'jap': 'たべます', 'eng': "eat, eats"},	
    {'jap': 'Jポップ', 'eng': "J-pop"},	
    {'jap': 'まんが', 'eng': "manga"},	
    {'jap': 'アニメ', 'eng': "anime"},	
    {'jap': 'やきゅう', 'eng': "baseball"},	
    {'jap': 'ざっし', 'eng': "magazines"},	
    {'jap': '本', 'eng': "books"},	
    {'jap': '読みます', 'eng': "read, will read, reads"},	
    {'jap': 'ニュース', 'eng': "news"},	
    {'jap': 'おんがく', 'eng': "music"},	
    {'jap': 'ロック', 'eng': "rock"},	
    {'jap': 'ききます', 'eng': "listen, listens, ask"},	
    {'jap': 'サッカー', 'eng': "soccer"},	
    {'jap': 'ときどき', 'eng': "sometimes"},	
    {'jap': 'します', 'eng': "makes, are doing, make"},	
    {'jap': 'バスケットボール', 'eng': "basketball"},	
    {'jap': 'を', 'eng': "through, with, for"},	
    {'jap': 'よく', 'eng': "often"},	
    {'jap': 'えいが', 'eng': "movies"},	
    {'jap': 'テレビ', 'eng': "TV"},	
    {'jap': '見ます', 'eng': "watch, will watch, watches"},
];

let gameCardsPt8 = [
    {'jap': 'アイスコーヒー', 'eng': "iced coffee"},	
    {'jap': 'アイスクリーム', 'eng': "ice cream, ice creams"},	
    {'jap': 'こうちゃ', 'eng': "black teas, black tea, tea"},	
    {'jap': '小さい', 'eng': "small, little"},	
    {'jap': 'すこし', 'eng': "a bit"},	
    {'jap': 'みそしる', 'eng': "miso soup"},	
    {'jap': 'サラダ', 'eng': "salad, salads"},	
    {'jap': 'そば', 'eng': "soba"},	
    {'jap': '大きい', 'eng': "big"},	
    {'jap': 'おにぎり', 'eng': "rice balls, rice ball, onigiri"},	
    {'jap': 'よっつ', 'eng': "four"},	
    {'jap': 'ええと', 'eng': "um"},	
    {'jap': 'みっつ', 'eng': "three"},	
    {'jap': 'じゃあ', 'eng': "well then, well, see you"},	
    {'jap': 'ふたつ', 'eng': "two"},	
    {'jap': 'あ', 'eng': "ah, oh"},	
    {'jap': 'ひとつ', 'eng': "one"},	
    {'jap': '水', 'eng': "water, waters"},	
    {'jap': 'レストラン', 'eng': "restaurant"},	
    {'jap': 'ていしょく', 'eng': "meal set, meal sets"},	
    {'jap': 'うどん', 'eng': "udon"},	
    {'jap': 'てんぷら', 'eng': "tempura"},	
    {'jap': 'ジャケット', 'eng': "jacket"},	
    {'jap': 'たかい', 'eng': "expensive, big, tall"},	
    {'jap': 'くろい', 'eng': "black"},	
    {'jap': 'みせ', 'eng': "store"},	
    {'jap': 'ありがとうございます', 'eng': "thank you"},	
    {'jap': '千', 'eng': "thousand"},	
    {'jap': 'いくら', 'eng': "how much"},	
    {'jap': 'ネクタイ', 'eng': "tie, necktie, ties"},	
    {'jap': 'えん', 'eng': "yen"},	
    {'jap': 'やすい', 'eng': "cheap, inexpensive"},	
    {'jap': '百', 'eng': "hundred"},	
    {'jap': 'あの', 'eng': "those, ah, that (over there)"},	
    {'jap': 'あおい', 'eng': "blue"},	
    {'jap': 'いい', 'eng': "good, like, well"},	
    {'jap': 'ドレス', 'eng': "dress"},	
    {'jap': 'すてき', 'eng': "lovely, nice, cute"},	
    {'jap': 'がほしいです', 'eng': "want"},	
    {'jap': 'スカート', 'eng': "skirt"},	
    {'jap': 'Tシャツ', 'eng': "t-shirt"},	
    {'jap': '新しい', 'eng': "new, newer"},	
    {'jap': 'ね', 'eng': "isn't it?"},	
    {'jap': 'ふく', 'eng': "clothes"},	
    {'jap': 'ダサい', 'eng': "hideous"},	
    {'jap': 'はちょっと', 'eng': "I don't really like, doesn't work very well, kind of"},	
    {'jap': 'さいふ', 'eng': "wallet"},	
    {'jap': '古い', 'eng': "old"},
];

let gameCardsPt9 = [
    {'jap': 'いっかい', 'eng': "first floor"},	
    {'jap': 'ホーム', 'eng': "platform"},	
    {'jap': 'どうが', 'eng': "video"},	
    {'jap': 'じゅうどう', 'eng': "judo"},	
    {'jap': 'テニス', 'eng': "tennis"},	
    {'jap': '話します', 'eng': "speaks, speak, tells"},	
    {'jap': '日曜日', 'eng': "Sunday"},	
    {'jap': 'ゲーム', 'eng': "video games"},	
    {'jap': 'からて', 'eng': "karate"},	
    {'jap': 'でかけます', 'eng': "go out, am going to go out"},	
    {'jap': '土曜日', 'eng': "Saturday, Saturdays"},	
    {'jap': '買います', 'eng': "will buy"},	
    {'jap': 'スポーツ', 'eng': "sports"},	
    {'jap': 'ヨガ', 'eng': "yoga"},	
    {'jap': 'ともだち', 'eng': "friend, friends"},	
    {'jap': 'ドラマ', 'eng': "drama"},	
    {'jap': 'あそびます', 'eng': "hang out, hangs out, (I) will play"},	
    {'jap': 'およぎます', 'eng': "swim, will swim, swims"},	
    {'jap': 'しゅうまつ', 'eng': "weekend"},	
    {'jap': 'ひとりで', 'eng': "by myself, by herself, alone"},
];

let gameCardsPt10 = [
    {'jap': 'でぐち', 'eng': "exit"}, 	
    {'jap': 'じはんき', 'eng': "vending machines, vending machine"}, 	
    {'jap': 'コインロッカー', 'eng': "storage lockers"}, 	
    {'jap': 'ちかい', 'eng': "close"}, 	
    {'jap': 'カフェ', 'eng': "cafe"}, 	
    {'jap': 'にかい', 'eng': "the second floor, two"}, 	
    {'jap': 'かいだん', 'eng': "stairs"}, 	
    {'jap': 'コンセント', 'eng': "outlet"}, 	
    {'jap': 'とおい', 'eng': "far"}, 	
    {'jap': 'でんわ', 'eng': "phone"}, 	
    {'jap': 'ちか', 'eng': "underground level"}, 	
    {'jap': 'タクシー', 'eng': "taxi"}, 	
    {'jap': 'エレベーター', 'eng': "elevator"}, 	
    {'jap': 'おてあらい', 'eng': "restroom"}, 	
    {'jap': 'wifi', 'eng': "wifi"}, 	
    {'jap': 'ありません', 'eng': "there are no, (it) is not, has nothing"}, 	
    {'jap': 'ゴミばこ', 'eng': "trash can"}, 	
    {'jap': 'のりかえ', 'eng': "transfer"}, 	
    {'jap': 'あそこ', 'eng': "over there"}, 	
    {'jap': 'かいさつ', 'eng': "ticket gate"}, 	
    {'jap': 'ありますか', 'eng': "is (there), is (it), are (there)"},     
];

let gameCardsPt11 = [
    {'jap': 'はしります', 'eng': "runs, run"},	
    {'jap': '飲みます', 'eng': "will have, drink, having"},	
    {'jap': 'パスタ', 'eng': "pasta"},	
    {'jap': 'ねます', 'eng': "sleep, go to sleep, will go to sleep"},	
    {'jap': 'シャワーをあびます', 'eng': "take a shower"},	
    {'jap': 'メールを読みます', 'eng': "check emails"},	
    {'jap': 'あした', 'eng': "tomorrow"},	
    {'jap': 'らいしゅう', 'eng': "next week"},	
    {'jap': 'バレーボール', 'eng': "volleyball"},	
    {'jap': 'まいしゅう', 'eng': "every week"},	
    {'jap': '四時', 'eng': "four o'clock"},	
    {'jap': 'つくります', 'eng': "make"},	
    {'jap': '食べます', 'eng': "eat, am going to eat, will eat"},	
    {'jap': '何時に', 'eng': "(at) what time"},	
    {'jap': 'おきます', 'eng': "get up, going to wake up, wake up"},	
    {'jap': '新聞', 'eng': "newspaper"},	
    {'jap': 'ラジオ', 'eng': "radio"},	
    {'jap': '何時', 'eng': "when, what time"},	
    {'jap': 'いつも', 'eng': "always, all the time, never"},
];

let gameCardsPt12 = [
    {'jap': 'れんあい', 'eng': "romance"}, 	
    {'jap': 'コメディ', 'eng': "comedy"}, 	
    {'jap': 'ほんとうですか', 'eng': "really"}, 	
    {'jap': 'アクション', 'eng': "action"}, 	
    {'jap': 'アメリカの', 'eng': "... of the US, American, ... of the United States"}, 	
    {'jap': 'どんな', 'eng': "any, what kind of, what (sort of)"}, 	
    {'jap': 'ファンタジー', 'eng': "fantasy"}, 	
    {'jap': 'ホラー', 'eng': "horror"}, 	
    {'jap': 'がすきですか', 'eng': "do you like"}, 	
    {'jap': 'しゅみはありますか', 'eng': "do you have a hobby"}, 	
    {'jap': 'ミステリー', 'eng': "mystery"}, 	
    {'jap': 'Kポップ', 'eng': "K-pop"}, 	
    {'jap': '日本の', 'eng': "Japan's, of Japan, Japanese"}, 	
    {'jap': 'がすきです', 'eng': "like"}, 	
    {'jap': 'ベトナム', 'eng': "Vietnam"}, 	
    {'jap': 'かんこく', 'eng': "Korea, korean"}, 	
    {'jap': 'かのじょ', 'eng': "she, girlfriend, her"}, 	
    {'jap': 'ちゅうごく', 'eng': "China"}, 	
    {'jap': 'さんは', 'eng': "Mr./Ms."}, 	
    {'jap': 'かれし', 'eng': "boyfriend"}, 	
    {'jap': 'アンドリュー', 'eng': "Andrew"}, 	
    {'jap': 'と言います', 'eng': "tell, say, says"}, 	
    {'jap': 'エリカ', 'eng': "Erica, Erika"}, 	
    {'jap': '言います', 'eng': "tell, tells, say"}, 	
    {'jap': 'こちら', 'eng': "this, these, (over) here"}, 	
    {'jap': 'ダニエル', 'eng': "Daniel"}, 
];

let gameCardsPt13 = [
    {'jap': 'つくえ', 'eng': "desk"}, 	
    {'jap': 'せんたくき', 'eng': "washing machine"}, 	
    {'jap': 'れいぞうこ', 'eng': "fridge"}, 	
    {'jap': 'いす', 'eng': "chair, chairs"}, 	
    {'jap': 'テーブル', 'eng': "table, tables"}, 	
    {'jap': 'でんしレンジ', 'eng': "microwave"}, 	
    {'jap': 'ふとん', 'eng': "futon, futons"}, 	
    {'jap': 'たぶん', 'eng': "probably"}, 	
    {'jap': 'ほんだな', 'eng': "bookshelf"}, 	
    {'jap': 'シャワー', 'eng': "shower, showers"}, 	
    {'jap': 'そうじき', 'eng': "vacuum cleaner"}, 	
    {'jap': 'エアコン', 'eng': "air conditioning, air conditioners, air conditioner"}, 	
    {'jap': 'ベッド', 'eng': "bed, beds"}, 	
    {'jap': 'せまい', 'eng': "cramped"}, 	
    {'jap': 'リビング', 'eng': "living room"}, 	
    {'jap': 'キッチン', 'eng': "kitchen"}, 	
    {'jap': 'があります', 'eng': "is, there is, there are"}, 	
    {'jap': 'アパート', 'eng': "apartment building, apartment, apartments"}, 	
    {'jap': 'ひっこします', 'eng': "am going to move, is going to move, move"}, 	
    {'jap': 'まだ', 'eng': "still, yet, too"}, 	
    {'jap': 'ひろい', 'eng': "spacious"}, 	
    {'jap': 'いえ', 'eng': "house"}, 
];

let gameCardsPt14 = [
    {'jap': 'あれ', 'eng': "hey, that (one) (over there), what"}, 	
    {'jap': '何ですか', 'eng': "what (is), what are, what's"}, 	
    {'jap': 'おてら', 'eng': "temple"}, 	
    {'jap': 'たてもの', 'eng': "building"}, 	
    {'jap': 'な', 'eng': "do not, (adjective ending), don't"}, 	
    {'jap': 'ところ', 'eng': "place"}, 	
    {'jap': 'ほんとうに', 'eng': "really, truly"}, 	
    {'jap': 'ながい', 'eng': "long"}, 	
    {'jap': 'しゅうてん', 'eng': "final stop"}, 	
    {'jap': '時間', 'eng': "time, hour, hours"}, 	
    {'jap': '分', 'eng': "minute, minutes"}, 	
    {'jap': 'ぐらい', 'eng': "about"}, 	
    {'jap': 'かかります', 'eng': "take, (it) takes, (it) will take"}, 	
    {'jap': 'はやい', 'eng': "fast"}, 	
    {'jap': '十分', 'eng': "sufficient, enough, adequate"}, 	
    {'jap': 'どの', 'eng': "any, each, which"}, 	
    {'jap': 'もうすぐ', 'eng': "soon, almost, shortly"}, 	
    {'jap': 'あさくさ', 'eng': "Asakusa"}, 	
    {'jap': 'うえのこうえん', 'eng': "Ueno Park"}, 	
    {'jap': '来ます', 'eng': "will be here, will come, is coming"}, 	
    {'jap': 'つぎの', 'eng': "next"}, 	
    {'jap': 'つぎ', 'eng': "next"}, 	
    {'jap': 'よこはま', 'eng': "Yokohama"}, 	
    {'jap': 'バス', 'eng': "bus"}, 	
    {'jap': 'あきはばら', 'eng': "Akihabara"}, 	
    {'jap': 'しぶや', 'eng': "Shibuya"}, 	
    {'jap': '行きます', 'eng': "am going, are going, go"}, 	
    {'jap': 'でんしゃ', 'eng': "train"}, 	
    {'jap': 'こんしゅう', 'eng': "this week"}, 	
    {'jap': 'いつ', 'eng': "when, what time"}, 
];

let gameCardsPt15 = [
    {'jap': 'ちゃんと', 'eng': "proper, properly, full"},	
    {'jap': 'くすりを飲みます', 'eng': "take"},	
    {'jap': '休みます', 'eng': "rest, take a break, absent (from)"},	
    {'jap': 'きょう', 'eng': "today"},	
    {'jap': 'ちかく', 'eng': "nearby"},	
    {'jap': 'ごかぞく', 'eng': "your family, family"},	
    {'jap': 'アレルギー', 'eng': "allergy"},	
    {'jap': 'ごりょうしん', 'eng': "(your) parents, parents"},	
    {'jap': 'でんわばんごう', 'eng': "phone number"},	
    {'jap': '何さい', 'eng': "how old"},	
    {'jap': '〇', 'eng': "0, zero"},	
    {'jap': '九', 'eng': "nine"},	
    {'jap': 'きゅうきゅうしゃ', 'eng': "ambulance"},	
    {'jap': 'おねがいします', 'eng': "please, I need ... please"},	
    {'jap': 'びょういん', 'eng': "hospital"},	
    {'jap': 'けいさつ', 'eng': "police"},	
    {'jap': 'あぶない', 'eng': "dangerous"},	
    {'jap': 'ぐあいがわるい', 'eng': "unwell"},	
    {'jap': 'すわります', 'eng': "sit, going to sit"},	
    {'jap': 'だいじょうぶ', 'eng': "OK"},	
    {'jap': 'どうですか', 'eng': "how are things, why don't, how is"},	
    {'jap': 'おみやげ', 'eng': "souvenir"},	
    {'jap': 'おかし', 'eng': "snack"},	
    {'jap': 'ポストカード', 'eng': "postcard"},	
    {'jap': 'ふじさん', 'eng': "Mt. Fuji"},	
    {'jap': '高い', 'eng': "tall"},	
    {'jap': '山', 'eng': "mountain, mountains, mount"},	
    {'jap': 'じんじゃ', 'eng': "shrine"},	
    {'jap': 'ラーメンや', 'eng': "ramen shop"},	
    {'jap': 'ピザや', 'eng': "pizza shop"},	
    {'jap': 'はらじゅく', 'eng': "Harajuku"},	
    {'jap': 'デザート', 'eng': "dessert"},
];

let gameCardsPt16 = [
    
];

let gameCardsPt17 = [
    
];

let gameCardsPt18 = [
    
];

let gameCardsPt19 = [
    
];

let gameCardsPt20 = [
    
];

let gameCards = []; // Stores selected categories
const delaySeconds = 3; // Time before showing translation
let revealTimeout; // Stores timeout ID
let b_showCategoryMenu = true; 

// Function to get Romaji from a Japanese word
function getRomaji(japaneseWord) {
    let romajiWord = "";

    for (let char of japaneseWord) {
        let foundHiragana = hiraganaDictionary.find(entry => entry.char === char);
        let foundKatakana = katakanaDictionary.find(entry => entry.char === char);

        if (foundHiragana) {
            romajiWord += foundHiragana.romaji + " ";
        } else if (foundKatakana) {
            romajiWord += foundKatakana.romaji + " ";
        } else {
            romajiWord += char + " "; // If character is not found, keep it as is
        }
    }

    return romajiWord.trim();
}

// Function to update selected categories
function updateSelectedCategories() {
    let selectedCategories = [];
    let checkboxes = document.querySelectorAll(".category:checked");

    checkboxes.forEach(checkbox => {
        if (checkbox.value === "hiragana1") selectedCategories.push(...gameCardsHiragana1);
        if (checkbox.value === "hiragana2") selectedCategories.push(...gameCardsHiragana2);
        if (checkbox.value === "hiragana3") selectedCategories.push(...gameCardsHiragana3);
        if (checkbox.value === "hiragana4") selectedCategories.push(...gameCardsHiragana4);
        if (checkbox.value === "hiragana5") selectedCategories.push(...gameCardsHiragana5);
        if (checkbox.value === "hiragana6") selectedCategories.push(...gameCardsHiragana6);
        if (checkbox.value === "hiragana7") selectedCategories.push(...gameCardsHiragana7);
        if (checkbox.value === "hiragana8") selectedCategories.push(...gameCardsHiragana8);
        if (checkbox.value === "hiragana9") selectedCategories.push(...gameCardsHiragana9);
        if (checkbox.value === "hiragana10") selectedCategories.push(...gameCardsHiragana10);
        if (checkbox.value === "hiragana11") selectedCategories.push(...gameCardsHiragana11);
        if (checkbox.value === "katakana1") selectedCategories.push(...gameCardsKatakana1);
        if (checkbox.value === "katakana2") selectedCategories.push(...gameCardsKatakana2);
        if (checkbox.value === "katakana3") selectedCategories.push(...gameCardsKatakana3);
        if (checkbox.value === "katakana4") selectedCategories.push(...gameCardsKatakana4);
        if (checkbox.value === "katakana5") selectedCategories.push(...gameCardsKatakana5);
        if (checkbox.value === "katakana6") selectedCategories.push(...gameCardsKatakana6);
        if (checkbox.value === "katakana7") selectedCategories.push(...gameCardsKatakana7);
        if (checkbox.value === "katakana8") selectedCategories.push(...gameCardsKatakana8);
        if (checkbox.value === "katakana9") selectedCategories.push(...gameCardsKatakana9);
        if (checkbox.value === "katakana10") selectedCategories.push(...gameCardsKatakana10);
        if (checkbox.value === "katakana11") selectedCategories.push(...gameCardsKatakana11);
        if (checkbox.value === "pt1") selectedCategories.push(...gameCardsPt1);
        if (checkbox.value === "pt2") selectedCategories.push(...gameCardsPt2);
        if (checkbox.value === "pt3") selectedCategories.push(...gameCardsPt3);
        if (checkbox.value === "pt4") selectedCategories.push(...gameCardsPt4);
        if (checkbox.value === "pt5") selectedCategories.push(...gameCardsPt5);
        if (checkbox.value === "pt6") selectedCategories.push(...gameCardsPt6);
        if (checkbox.value === "pt7") selectedCategories.push(...gameCardsPt7);
        if (checkbox.value === "pt8") selectedCategories.push(...gameCardsPt8);
        if (checkbox.value === "pt9") selectedCategories.push(...gameCardsPt9);
        if (checkbox.value === "pt10") selectedCategories.push(...gameCardsPt10);
        if (checkbox.value === "pt11") selectedCategories.push(...gameCardsPt11);
        if (checkbox.value === "pt12") selectedCategories.push(...gameCardsPt12);
        if (checkbox.value === "pt13") selectedCategories.push(...gameCardsPt13);
        if (checkbox.value === "pt14") selectedCategories.push(...gameCardsPt14);
        if (checkbox.value === "pt15") selectedCategories.push(...gameCardsPt15);
    });

    gameCards = selectedCategories.length > 0 ? selectedCategories : [
        ...gameCardsHiragana1, 
        ...gameCardsHiragana2, 
        ...gameCardsHiragana3, 
        ...gameCardsHiragana4, 
        ...gameCardsHiragana5, 
        ...gameCardsHiragana6, 
        ...gameCardsHiragana7, 
        ...gameCardsHiragana8, 
        ...gameCardsHiragana9, 
        ...gameCardsHiragana10, 
        ...gameCardsHiragana11,
        ...gameCardsKatakana1, 
        ...gameCardsKatakana2, 
        ...gameCardsKatakana3, 
        ...gameCardsKatakana4, 
        ...gameCardsKatakana5, 
        ...gameCardsKatakana6, 
        ...gameCardsKatakana7, 
        ...gameCardsKatakana8, 
        ...gameCardsKatakana9, 
        ...gameCardsKatakana10, 
        ...gameCardsKatakana11, 
        ...gameCardsPt1, 
        ...gameCardsPt2, 
        ...gameCardsPt3,
        ...gameCardsPt4,
        ...gameCardsPt5,
        ...gameCardsPt6,
        ...gameCardsPt7,
        ...gameCardsPt8,
        ...gameCardsPt9,
        ...gameCardsPt10,
        ...gameCardsPt11,
        ...gameCardsPt12,
        ...gameCardsPt13,
        ...gameCardsPt14,
        ...gameCardsPt15,
    ];
}

// Function to show a random word
function showRandomWord() {
    clearTimeout(revealTimeout); // Reset timeout

    updateSelectedCategories(); // Update selected categories before choosing a word

    if (gameCards.length === 0) {
        document.getElementById("japanese-word").innerText = "No category selected!";
        document.getElementById("romaji-word").innerText = "";
        document.getElementById("english-word").innerText = "";
        return;
    }

    let randomIndex = Math.floor(Math.random() * gameCards.length);
    let chosenCard = gameCards[randomIndex];

    document.getElementById("japanese-word").innerText = chosenCard.jap;
    document.getElementById("romaji-word").innerText = getRomaji(chosenCard.jap);

    let engWord = document.getElementById("english-word");
    engWord.innerText = chosenCard.eng;
    engWord.style.visibility = "hidden";

    let romWord = document.getElementById("romaji-word");
    romWord.style.visibility = "hidden";

    // Show translation after delay
    revealTimeout = setTimeout(() => {
        romWord.style.visibility = "visible";
        engWord.style.visibility = "visible";
    }, delaySeconds * 1000);
}

function toggleGroupMenu() {
    let groupLabel = document.getElementById("group-label");

    if (b_showCategoryMenu) {
        groupLabel.style.display = "none";
        b_showCategoryMenu = false;
    }
    else {
        groupLabel.style.display = "block";
        b_showCategoryMenu = true;
    }
}

// Update words when checkboxes change
document.querySelectorAll(".category").forEach(checkbox => {
    checkbox.addEventListener("change", updateSelectedCategories);
});

// Initialize selection
updateSelectedCategories();
