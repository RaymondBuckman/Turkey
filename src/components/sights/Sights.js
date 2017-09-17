import React, { Component } from 'react';
import Lightbox from 'lightbox-react';

import grand1 from '../../img/grand-bazaar-4.jpg';
import grand2 from '../../img/grand-bazaar-3.jpg';
import basilica1 from '../../img/basilica-cistern-1.jpg';
import basilica2 from '../../img/basilica-cistern-4.jpg';
import cappadocia1 from '../../img/cappadocia-3.jpg';
import cappadocia2 from '../../img/cappadocia-4.jpg';
import hagia1 from '../../img/hagia-sophia-2.jpg';
import hagia2 from '../../img/hagia-sophia-3.jpg';
import library1 from '../../img/library-of-celsus-1.jpg';
import library2 from '../../img/library-of-celsus-2.jpg';
import chora1 from '../../img/chora-church-1.jpg';
import chora2 from '../../img/chora-church-2.jpg';
import dolmabahce1 from '../../img/dolmabahce-1.jpg';
import dolmabahce2 from '../../img/dolmabahce-3.jpg';
import miniaturk1 from '../../img/miniaturk-1.jpg';
import miniaturk2 from '../../img/miniaturk-2.jpg';
import nemrut1 from '../../img/nemrut-1.jpg';
import nemrut2 from '../../img/nemrut-2.jpg';
import pamukkale1 from '../../img/pamukkale-2.jpg';
import pamukkale2 from '../../img/pamukkale-3.jpg';
import sumela1 from '../../img/sumela-monastery-2.jpg';
import sumela2 from '../../img/sumela-monastery-3.jpg';
import anitkabir1 from '../../img/anitkabir-1.jpg';
import anitkabir2 from '../../img/anitkabir-2.jpg';
import blue1 from '../../img/blue-mosque-1.jpg';
import blue2 from '../../img/blue-mosque-2.jpg';
import temple1 from '../../img/temple-of-artemis-1.jpg';
import temple2 from '../../img/temple-of-artemis-2.jpg';
import bodrum1 from '../../img/bodrum-castle-1.jpg';
import bodrum2 from '../../img/bodrum-castle-2.jpg';
import mary1 from '../../img/virgin-mary-house-2.jpg';
import mary2 from '../../img/virgin-mary-house-1.jpg';
import duden1 from '../../img/duden-1.jpg';
import duden2 from '../../img/duden-2.jpg';
import gulhane1 from '../../img/gulhane-1.jpg';
import gulhane2 from '../../img/gulhane-2.jpg';
import topkapi1 from '../../img/topkapi-1.jpg';
import topkapi2 from '../../img/topkapi-2.jpg';
import uzungol1 from '../../img/uzungol-2.jpg';
import uzungol2 from '../../img/uzungol-3.jpg';
import mevlana1 from '../../img/mevlana-1.jpg';
import mevlana2 from '../../img/mevlana-2.jpg';
import taksim1 from '../../img/taksim-3.jpg';
import taksim2 from '../../img/taksim-1.jpg';
import maiden1 from '../../img/maidens-tower-2.jpg';
import maiden2 from '../../img/maidens-tower-1.jpg';
import aspendos1 from '../../img/aspendos-1.jpg';
import aspendosl2 from '../../img/aspendos-2.jpg';



 
const images = [
    grand1,
    grand2,
    basilica1,
    basilica2,
    cappadocia1,
    cappadocia2,
    hagia1,
    hagia2,
    library1,
    library2,
    chora1,
    chora2,
    dolmabahce1,
    dolmabahce2,
    miniaturk1,
    miniaturk2,
    nemrut1,
    nemrut2,
    pamukkale1,
    pamukkale2,
    sumela1,
    sumela2,
    anitkabir1,
    anitkabir2,
    blue1,
    blue2,
    temple1,
    temple2,
    bodrum1,
    bodrum2,
    mary1,
    mary2,
    duden1,
    duden2,
    gulhane1,
    gulhane2,
    topkapi1,
    topkapi2,
    uzungol1,
    uzungol2,
    mevlana1,
    mevlana2,
    taksim1,
    taksim2,
    maiden1,
    maiden2,
    aspendos1,
    aspendosl2,    
];

const titles = [
    (<h1 className="carousel-title"> Grand Bazaar </h1>),
    (<h1 className="carousel-title"> Grand Bazaar </h1>),
    (<h1 className="carousel-title"> Basilica Cistern </h1>),
    (<h1 className="carousel-title"> Basilica Cistern </h1>),
    (<h1 className="carousel-title"> Cappadocia </h1>),
    (<h1 className="carousel-title"> Cappadocia </h1>),
    (<h1 className="carousel-title"> Hagia Sophia </h1>),
    (<h1 className="carousel-title"> Hagia Sophia </h1>),
    (<h1 className="carousel-title"> Library of Celsus </h1>),
    (<h1 className="carousel-title"> Library of Celsus </h1>),
    (<h1 className="carousel-title"> Chora Church </h1>),
    (<h1 className="carousel-title"> Chora Church </h1>),  
    (<h1 className="carousel-title"> Dolmabahçe </h1>),
    (<h1 className="carousel-title"> Dolmabahçe </h1>),
    (<h1 className="carousel-title"> Miniatürk </h1>),
    (<h1 className="carousel-title"> Miniatürk </h1>),
    (<h1 className="carousel-title"> Nemrut </h1>),
    (<h1 className="carousel-title"> Nemrut </h1>),
    (<h1 className="carousel-title"> Pamukkale </h1>),
    (<h1 className="carousel-title"> Pamukkale </h1>),
    (<h1 className="carousel-title"> Sumela Monastery </h1>),
    (<h1 className="carousel-title"> Sumela Monastery </h1>),
    (<h1 className="carousel-title"> Anıtkabir </h1>),
    (<h1 className="carousel-title"> Anıtkabir </h1>),
    (<h1 className="carousel-title"> Blue Mosque </h1>),
    (<h1 className="carousel-title"> Blue Mosque </h1>),
    (<h1 className="carousel-title"> Temple of Artemis </h1>),
    (<h1 className="carousel-title"> Temple of Artemis </h1>),
    (<h1 className="carousel-title"> Bodrum Castle </h1>),
    (<h1 className="carousel-title"> Bodrum Castle </h1>),
    (<h1 className="carousel-title"> House of the Virgin Mary </h1>),
    (<h1 className="carousel-title"> House of the Virgin Mary </h1>),
    (<h1 className="carousel-title"> Düden Waterfalls </h1>),
    (<h1 className="carousel-title"> Düden Waterfalls </h1>),
    (<h1 className="carousel-title"> Gülhane Park </h1>),
    (<h1 className="carousel-title"> Gülhane Park </h1>),  
    (<h1 className="carousel-title"> Topkapı Palace </h1>),
    (<h1 className="carousel-title"> Topkapı Palace </h1>),
    (<h1 className="carousel-title"> Uzungöl </h1>),
    (<h1 className="carousel-title"> Uzungöl </h1>),
    (<h1 className="carousel-title"> Mevlana Museum </h1>),
    (<h1 className="carousel-title"> Mevlana Museum </h1>),
    (<h1 className="carousel-title"> Taksim Square </h1>),
    (<h1 className="carousel-title"> Taksim Square </h1>),
    (<h1 className="carousel-title"> Maiden's Tower </h1>),
    (<h1 className="carousel-title"> Maiden's Tower </h1>),
    (<h1 className="carousel-title"> Aspendos </h1>),
    (<h1 className="carousel-title"> Aspendos </h1>),
];
      
const captions = [
    "The Grand Bazaar is one of the largest and oldest covered markets in the world, with over 60 covered streets and over 4,000 shops which attract several hundred thousand visitors daily.",
     
    "The Grand Bazaar is located inside the Walled city of Istanbul, in the district of Fatih and in the neighbourhood (mahalle) bearing the same name (Kapalıçarşı). It stretches roughly from west to east between the mosques of Beyazit and of Nuruosmaniye. The Bazaar can easily be reached from Sultanahmet and Sirkeci by trams (Beyazıt-Kapalıçarşı stop).",
     
    "The Basilica Cistern is the largest of several hundred ancient cisterns that lie beneath the city of Istanbul (formerly Constantinople), Turkey. The cistern, located 500 feet southwest of the Hagia Sophia on the historical peninsula of Sarayburnu, was built in the 6th century during the reign of Byzantine Emperor Justinian I.",
     
    "This cathedral-size cistern is an underground chamber approximately 453 ft by 212 ft – about 105,000 sq ft in area – capable of holding 2,800,000 cu ft of water. The ceiling is supported by a forest of 336 marble columns, each 30 ft tall, arranged in 12 rows of 28 columns each spaced 16 ft apart.",
     
    "Cappadocia is a historical region in Central Anatolia, largely in the Nevşehir, Kayseri, Kırşehir, Aksaray, and Niğde Provinces in Turkey. The relief consists of a high plateau over 1000 m in altitude that is pierced by volcanic peaks, with Mount Erciyes (ancient Argaeus) near Kayseri (ancient Caesarea) being the tallest at 3916 m.",
     
    "The earliest record of the name of Cappadocia dates from the late 6th century BC, when it appears in the trilingual inscriptions of two early Achaemenid kings, Darius I and Xerxes, as one of the countries of the Persian Empire. In these lists of countries, the Old Persian name is Haspaduya, which according to some researchers is derived from Iranian Huw-aspa-dahyu- 'the land of beautiful horses'",
     
    "Hagia Sophia was a Greek Orthodox Christian patriarchal basilica (church), later an imperial mosque, and now a museum (Ayasofya Müzesi) in Istanbul, Turkey. The Roman Empire's first Christian Cathedral, from the date of its construction in 537 AD, and until 1453, it served as an Eastern Orthodox cathedral and seat of the Patriarch of Constantinople, except between 1204 and 1261, when it was converted by the Fourth Crusaders to a Roman Catholic cathedral under the Latin Empire. The building was later converted into an Ottoman mosque from 29 May 1453 until 1931. It was then secularized and opened as a museum on 1 February 1935.",
     
    "Famous in particular for its massive dome, it is considered the epitome of Byzantine architecture and is said to have 'changed the history of architecture'. It remained the world's largest cathedral for nearly a thousand years, until Seville Cathedral was completed in 1520.",
     
    "The Library of Celsus is an ancient Roman building in Ephesus, Anatolia, now part of Selçuk, Turkey. It was built in honour of the Roman Senator Tiberius Julius Celsus Polemaeanus, completed between circa 114–117 A.D. by Celsus' son, Gaius Julius Aquila (consul, 110 AD). The library was 'one of the most impressive buildings in the Roman Empire' and built to store 12,000 scrolls and to serve as a mausoleum for Celsus, who is buried in a crypt beneath the library in a decorated marble sarcophagus.",
     
    "The interior of the library was destroyed, supposedly by an earthquake in 262 A.D., (though other evidence points to a fire during a Gothic invasion in that same year) and the façade by another earthquake in the tenth or eleventh century A.D. It lay in ruins for centuries, until the façade was re-erected (anastylosis) by archaeologists between 1970 and 1978.",
     
    "The Church of the Holy Saviour in Chora is a medieval Byzantine Greek Orthodox church preserved as the Chora Museum in the Edirnekapı neighborhood of Istanbul. The neighborhood is situated in the western part of the municipality (belediye) of the Fatih district. In the 16th century, during the Ottoman era, the church was converted into a mosque; it became a museum in 1948. The interior of the building is covered with some of the oldest and finest surviving Byzantine mosaics and frescoes; they were uncovered and restored after the building was secularized and turned into a museum.",
     
    "The Chora Church is not as large as some of the other surviving Byzantine churches of Istanbul (it covers 742.5 m²) but it is unique among them, because of its almost completely still extant internal decoration. The building divides into three main areas: the entrance hall or narthex, the main body of the church or naos, and the side chapel or parecclesion. The building has six domes: two in the esonarthex, one in the parecclesion and three in the naos.",
     
    "Dolmabahçe Palace is located in the Beşiktaş district of Istanbul, Turkey, on the European coast of the Bosphorus, served as the main administrative center of the Ottoman Empire from 1856 to 1887 and 1909 to 1922 (Yıldız Palace was used in the interim).",
     
    "The site of Dolmabahçe was originally a bay on the Bosphorus which was used for the anchorage of the Ottoman fleet. The area was reclaimed gradually during the 18th century to become an imperial garden, much appreciated by the Ottoman sultans; it is from this garden that the name Dolmabahçe (Filled-in Garden) comes from the Turkish dolma meaning 'filled' and bahçe meaning 'garden'.",
     
    "Miniatürk is a miniature park situated at the north-eastern shore of Golden Horn in Istanbul, Turkey. It was opened May 2, 2003. Miniatürk covers a total area of 60,000 square metres (650,000 sq ft). It is one of the world's largest miniature parks with its 15,000 m2 (160,000 sq ft) model area. The park contains 122 models in 1:25 scale. It contains structures from in and around Turkey, as well as interpretations of historic structures.",
     
    "Overall 58 of the structures are from Istanbul, 52 are from Anatolia, and 12 are from the Ottoman territories that today lie outside of Turkey. Also featured are historic structures like the Temple of Artemis at Ephesus and the Mausoleum of Maussollos at Halicarnassus (now Bodrum). Additional space is reserved for potential future models.",
     
    "Nemrut or Nemrud is a 7,001 ft high mountain in southeastern Turkey, notable for the summit where a number of large statues are erected around what is assumed to be a royal tomb from the 1st century BC.",
     
    "The name is a relatively modern one, dating back to the Middle Ages. In Armenian legend, Hayk defeated the Biblical king Nimrod (equated with Bel) and buried him in these mountains. Nemrut is most likely to have received its name from an Armenian tradition in which Nimrod was killed by an arrow by Hayk during a massive battle between two rival armies of giants to the south-east of Lake Van.",
     
    "Pamukkale, meaning 'cotton castle' in Turkish, is a natural site in Denizli Province in southwestern Turkey. The area is famous for its hot springs and enormous white terraces of travertine, a carbonate mineral left by the flowing water. It is located in Turkey's Inner Aegean region, in the River Menderes valley, which has a temperate climate for most of the year.",
     
    "This area has been drawing the weary to its thermal springs since the time of Classical antiquity. The Turkish name refers to the surface of the shimmering, snow-white limestone, shaped over millennia by calcium-rich springs. Dripping slowly down the vast mountainside, mineral-rich waters foam and collect in terraces, spilling over cascades of stalactites into milky pools below. Legend has it that the formations are solidified cotton (the area’s principal crop) that giants left out to dry.",
     
    "Sumela Monastery is a Greek Orthodox monastery dedicated to the Virgin Mary (Panagia, meaning 'All Holy' in Greek) at Melá Mountain within the Pontic Mountains range, in the Maçka district of Trabzon Province in modern Turkey. According to another version of decryption of the monastery complex name, it comes from Laz word sumela which means 'Trinity' in English.",
     
    "Nestled in a steep cliff at an altitude of about 3,900 ft facing the Altındere valley, it is a site of great historical and cultural significance, as well as a major tourist attraction within Altındere National Park. Due to an increase in rock falls, on 22 September 2015 the monastery was closed to the public for safety reasons for the duration of one year to resolve the problem; this was later extended to three years. It is scheduled to reopen for visitors on Assumption day 2018.",
     
    "Anıtkabir (literally, 'memorial tomb') is the mausoleum of Mustafa Kemal Atatürk, the leader of the Turkish War of Independence and the founder and first President of the Republic of Turkey. It is located in Ankara and was designed by architects Professor Emin Onat and Assistant Professor Ahmet Orhan Arda, whose proposal beat 48 other entries from several countries in a competition held by the Turkish Government in 1941 for a 'monumental tomb' for Atatürk.",
     
    "The site is also the final resting place of İsmet İnönü, the second President of Turkey, who was interred there after he died in 1973. His tomb faces the Atatürk Mausoleum, on the opposite side of the Ceremonial Ground. The mausoleum was depicted on various Turkish banknotes during 1966–1987 and 1997–2009.",
     
    "The Sultan Ahmed Mosque or Sultan Ahmet Mosque is a historic mosque located in Istanbul, Turkey. A popular tourist site, the Sultan Ahmed Mosque continues to function as a mosque today; men still kneel in prayer on the mosque's lush red carpet after the call to prayer. The Blue Mosque, as it is popularly known, was constructed between 1609 and 1616 during the rule of Ahmed I.",
     
    "After the Peace of Zsitvatorok and the crushing loss in the 1603–1618 war with Persia, Sultan Ahmet I, decided to build a large mosque in Istanbul to reassert Ottoman power. It would be the first imperial mosque for more than forty years. While his predecessors had paid for their mosques with the spoils of war, Ahmet I procured funds from the Treasury, because he had not gained remarkable victories.",
     
    "The Temple of Artemis or Artemision, also known less precisely as the Temple of Diana, was a Greek temple dedicated to the goddess Artemis. It was located in Ephesus (near the modern town of Selçuk in present-day Turkey). One of the Seven Wonders of the Ancient World, it was completely rebuilt three times before its final destruction in 401 AD. Only foundations and sculptural fragments of the latest of the temples at the site remain.",
     
    "An attempted replica of what the Temple of Artemis looked like can be viewed in Miniatürk.",
     
    "Bodrum Castle, located in southwest Turkey in the port city of Bodrum, was built from 1402 onwards, by the Knights of St John as the Castle of St. Peter or Petronium.",
     
    "The construction of the castle began in 1404 under the supervision of the German knight-architect Heinrich Schlegelholt. Construction workers were guaranteed a reservation in heaven by a Papal Decree of 1409. They used squared green volcanic stone, marble columns and reliefs from the nearby Mausoleum of Maussollos to fortify the castle. The first walls were completed in 1437. The chapel was among the first completed inner structures (probably 1406). It consists of a vaulted nave and an apse. The chapel was reconstructed in Gothic style by Spanish Knights of Malta in 1519-1520. Their names can be found on two cornerstones of the façade.",
     
    "The House of the Virgin Mary is a Catholic and Muslim shrine located on Mt. Koressos in the vicinity of Ephesus, 4.3 mi from Selçuk in Turkey.",
     
    "Catholic pilgrims visit the house based on the belief that Mary, the mother of Jesus, was taken to this stone house by Saint John and lived there until her Assumption (according to Catholic doctrine) or Dormition (according to Orthodox belief). The shrine has merited several papal Apostolic Blessings and visits from several popes, the earliest pilgrimage coming from Pope Leo XIII in 1896, and the most recent in 2006 by Pope Benedict XVI.",
     
    "Düden Waterfalls are a group of waterfalls in the province of Antalya, Turkey. The waterfalls, formed by the recycle station water, are located 12 kilometres (7.5 mi) north-east of Antalya. They end where the waters of the Lower Düden Falls drop off a rocky cliff directly into the Mediterranean Sea.",
     
    "The water, which disappears at Bıyıklı Sinkhole, travels 9 mi underground and comes out again at Varsak pit. After a very short fall, it disappears again from the other end. The water which disappears at Varsak goes underground for 1.2 mi and comes out again at Düdenbasi, by pressure made by a syphon. The water which falls from Düdenbasi is the water coming from Kepez Hydroelectrical Complex.",
     
    "Gülhane Park is a historical urban park in the Eminönü district of Istanbul, Turkey; it is located adjacent to and on the grounds of the Topkapı Palace. The south entrance of the park sports one of the larger gates of the palace. It is the oldest and one of the most expansive public parks in Istanbul.",
     
    "The namesake of the park, the Gülhane ('Rosehouse') present on the grounds, was the place where the 1839 Edict of Gülhane was proclaimed. The edict launched the Tanzimat reforms in the Ottoman Empire, which modernized the empire and included changes such as the equalization of all Ottoman citizens, regardless of religion, before the law. The proclamation was made by Grand Vizier Mustafa Reşid Pasha, a leading statesman, diplomat, and reformer in the Empire.",
     
    "The Topkapı Palace is a large museum in Istanbul, Turkey. In the 15th century, it served as the main residence and administrative headquarters of the Ottoman sultans.",
     
    "Construction began in 1459, ordered by Mehme the Conqueror, six years after the conquest of Constantinople. Topkapı was originally called the 'New Palace' to distinguish it from the Old Palace in Beyazıt Square. It was given the name Topkapı, meaning Cannon Gate, in the 19th century. The complex was expanded over the centuries, with major renovations after the 1509 earthquake and the 1665 fire. The palace complex consists of four main courtyards and many smaller buildings. Female members of the Sultan's family lived in the harem, and leading state officials, including the Grand vizier held meetings in the Imperial Council building.",
     
    "Uzungöl, or 'long lake' in Turkish, is a lake situated to the south of the city of Trabzon, in the Çaykara district of Trabzon Province, Turkey. Uzungöl is also the name of the village on the lake's coast. Over the years, the picturesque lake, its village and the surrounding valley have become popular tourist attractions. The lake is at a distance of 99 km from Trabzon's city center, and 19 km from Çaykara's district center. It was formed by a landslide, which transformed the stream bed into a natural dam, in the valley of the Haldizen Stream.",
     
    "The area is most famous for its natural environment. Located in a valley between high rising mountains, the lake and village at first appear inaccessible. The surrounding mountain forests and fog, occasionally enveloping the lake at night, also add to the scenery. The tourist boom of the recent years[when?] has attracted investors, who opened a number of hotels, restaurants, and souvenir shops in the village. The transport infrastructure has also been improved.",
     
    "The Mevlâna Museum, located in Konya, Turkey, is the mausoleum of Jalal ad-Din Muhammad Rumi, a Persian Sufi mystic also known as Mevlâna or Rumi. It was also the dervish lodge (tekke) of the Mevlevi order, better known as the whirling dervishes.",
     
    "Sultan 'Ala' al-Din Kayqubad, the Seljuk sultan who had invited Mevlâna to Konya, offered his rose garden as a fitting place to bury Rumi's father, Baha' ud-Din Walad (also written as Bahaeddin Veled), when he died on 12 January 1231. When Mevlâna died on 17 December 1273 he was buried next to his father.",
     
    "Taksim Square, situated in Beyoğlu in the European part of Istanbul, Turkey, is a major tourist and leisure district famed for its restaurants, shops, and hotels. It is considered the heart of modern Istanbul, with the central station of the Istanbul Metro network.",
     
    "Taksim Square is also the location of the Monument of the Republic which was crafted by Pietro Canonica and inaugurated in 1928. The monument commemorates the 5th anniversary of the foundation of the Republic of Turkey in 1923, following the Turkish War of Independence.",
     
    "The Maiden's Tower, also known as Leander's Tower (Tower of Leandros) since the medieval Byzantine period, is a tower lying on a small islet located at the southern entrance of the Bosphorus strait 200 meters from the coast of Üsküdar in Istanbul, Turkey.",
     
    "There are many legends about the construction of the tower and its location. According to the most popular Turkish legend, an emperor had a much beloved daughter and one day, an oracle prophesied that she would be killed by a venomous snake on her 18th birthday. The emperor, in an effort to thwart his daughter's early demise by placing her away from land so as to keep her away from any snakes, had the tower built in the middle of the Bosphorus to protect his daughter until her 18th birthday. The princess was placed in the tower, where she was frequently visited only by her father.",
     
    "Aspendos or Aspendus was an ancient Greco-Roman city in Antalya province of Turkey. The site is located 4.3 mi northeast of central Serik.",
     
    "Aspendos is known for having the best-preserved theatre of antiquity. With a diameter of 315 ft, the theatre provided seating for 12,000. The theatre was built in 155 by the Greek architect Zenon, a native of the city. It was periodically repaired by the Seljuqs, who used it as a caravanserai, and in the 13th century the stage building was converted into a palace by the Seljuqs of Rum.",   
];
 
export default class Sights extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            photoIndex: 1,
            isOpen: false,
        };
    }
 
    render() {
        const {
            photoIndex,
            isOpen
        } = this.state;
 
        return (
            <div className="Eleven" id="Eleven">
                 <ul className="flex-container">
                    <li className="flex-item" >
                        <h1 id="manzaralar" className="scrollmagic-header">Manzaralar</h1>
                        <h2 id="sights" className="scrollmagic-header">Sights</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:0, isOpen: true,  })}>
                        <h2>Grand Bazaar</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:2, isOpen: true })}>
                        <h2>Basilica Cistern</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:4, isOpen: true })}>
                        <h2>Cappadocia</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:6, isOpen: true })}>
                        <h2>Hagia Sophia</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:8, isOpen: true })}>
                        <h2>Library of Celsus</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:10, isOpen: true })}>
                        <h2>Chora Church</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:12, isOpen: true })}>
                        <h2>Dolmabahçe</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:14, isOpen: true })}>
                        <h2>Miniatürk</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:16, isOpen: true })}>
                        <h2>Nemrut</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:18, isOpen: true })}>
                        <h2>Pamukkale</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:20, isOpen: true })}>
                        <h2>Sumela Monastery</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:22, isOpen: true })}>
                        <h2>Anıtkabir</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:24, isOpen: true })}>
                        <h2>Blue Mosque</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:26, isOpen: true })}>
                        <h2>Temple of Artemis</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:28, isOpen: true })}>
                        <h2>Bodrum Castle</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:30, isOpen: true })}>
                        <h2>House of the Virgin Mary</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:32, isOpen: true })}>
                        <h2>Düden Waterfalls</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:34, isOpen: true })}>
                        <h2>Gülhane Park</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:36, isOpen: true })}>
                        <h2>Topkapı Palace</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:38, isOpen: true })}>
                        <h2>Uzungöl</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:40, isOpen: true })}>
                        <h2>Mevlana Museum</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:42, isOpen: true })}>
                        <h2>Taksim Square</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:44, isOpen: true })}>
                        <h2>Maiden's Tower</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:46, isOpen: true })}>
                        <h2>Aspendos</h2>
                    </li>
                </ul>
 
                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
 
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                        
                        imageTitle={titles[this.state.photoIndex]}
                        imageCaption={captions[this.state.photoIndex]}
                    />
                }
            </div>
        );
    }
}

