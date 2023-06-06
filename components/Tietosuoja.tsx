import React from 'react'

function Tietosuoja() {
  return (
    <div>
        <label htmlFor="tietosuoja_modal" className="cursor-pointer">Tietosuojaseloste</label>
        <input type="checkbox" id="tietosuoja_modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box bg-neutral-800 max-w-4xl">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-neutral-200 text-2xl font-bold">Tietosuojaseloste</h1>
                    <label htmlFor="tietosuoja_modal" className="btn text-neutral-100 bg-red-500 hover:bg-red-600">Sulje</label>
                </div>
                <div className="text-left pt-4">
                    <p className="font-semibold mb-2">
                    Tässä tietosuojaselosteessa kuvataan henkilötietojen käsittelyä koskevat periaatteet koskien yrityksen palveluja. Tarkempi kuvaus palveluista löytyy verkkosivuilta tai kysyttäessä.  
                    </p>
                    <p className="font-semibold mb-1">
                    Tässä tietosuojaselosteessa kerrotaan: 
                    </p>
                    <ul className="pl-4 mb-2">
                        <li className="list-disc">miten yritys käsittelee asiakkaiden henkilötietoja</li>
                        <li className="list-disc">minkälaisia henkilötietoja yritys voi kerätä asiakkaista </li>
                        <li className="list-disc">mihin tarkoituksiin yritys voi käyttää asiakkaiden henkilötietoja </li>
                        <li className="list-disc">asiakkaan oikeuksia koskien kerättyjä henkilötietoja </li>
                    </ul>
                    <p className="font-semibold mb-2">
                    Rekisterinpitäjällä on tietosuoja-asetuksen mukaan velvollisuus informoida selkeällä tavalla rekisteröityjä. Tämä seloste täyttää informointivelvoitteen. 
                    </p>

                    <h1 className="font-bold text-lg mb-2">
                    1. Rekisterinpitäjä
                    </h1>
                    <p className="mb-2">
                    Relevium <br/>
                    3193558-9 <br/>
                    Yhteystiedot: Vesijärvenkatu 52 A 4 15140 Lahti <br/>
                    ‍www.relevium.fi 
                    </p>
                    <p className="mb-2">
                    Yhteystiedot rekisteriä koskevissa asioissa: <br/>
                    Relevium / Juho Heikkilä <br/>
                    Vesijärvenkatu 52 A 4 15140 Lahti <br/>
                    0408472461 <br/>
                    juho@relevium.fi 
                    </p>

                    <h1 className="font-bold text-lg mb-2">
                    2. Rekisterin nimi
                    </h1>
                    <p className="mb-2">
                    Releviumin asiakasrekisteri, potilastietorekisteri
                    </p>

                    <h1 className="font-bold text-lg mb-2">
                    3. Henkilötietojen käsittelyn tarkoitus
                    </h1>
                    <p className="mb-2">
                    ‍Henkilötietojen käsittely perustuu asiakassuhteeseen. Rekisteri sisältää asiakkaan käynti-, hoito- ja tutkimustiedot. Potilas- ja asiakastietorekisterin tarkoitus on asiakassuhdetietojen, asiakaskäyntien ja asiakaspalautteiden kirjaaminen ja arkistointi. Asiakastietoja voidaan käyttää myös yrityksen suoramarkkinointiin ja yrityksen oman toiminnan seurantaan ja tilastointiin.  
                    </p>
                    <p className="mb-2">
                    Henkilötietojen käsittelyn ja rekisterin käyttötarkoitus: <br/>
                    Asiakasrekisteriin kerätään yrityksen asiakkaiden henkilötietoja, jotta palvelut voitaisiin tarjota asianmukaisesti ja lainmukaisesti.
                    </p>
                    <p className="mb-1">
                    Yrityksen edustajat käyttävät henkilötietojen käsittelyyn ja ylläpitämiseen seuraavia rekistereitä: 
                    </p>
                    <ul className="pl-4 mb-2">
                        <li className="list-disc">Vello ajanvarausjärjestelmä </li>
                        <li className="list-disc">Paperiset esitietolomakkeet </li>
                        <li className="list-disc">Laskutusohjelma </li>
                        <li className="list-disc">Sähköposti sekä muut asiakasyhteydenotot  </li>
                    </ul>
                    <p className="mb-1">
                    Henkilötietoja käsitellään vain ennalta määriteltyihin tarkoituksiin, jotka ovat seuraavat: 
                    </p>
                    <ul className="pl-4 mb-2">
                        <li className="list-disc">asiakassuhteen hoitaminen </li>
                        <li className="list-disc">palveluista tiedottaminen ja markkinointi </li>
                        <li className="list-disc">palvelun kehittäminen  </li>
                    </ul>

                    <h1 className="font-bold text-lg mb-2">
                    4. Rekisteriin tallennettavat henkilötiedot
                    </h1>
                    <p className="mb-1">
                    ‍Asiakasrekisteri sisältää seuraavat tiedot: 
                    </p>
                    <ul className="pl-4 mb-2">
                        <li className="list-disc">rekisteröidyn etu- ja sukunimi </li>
                        <li className="list-disc">syntymäaika ja henkilötunnus </li>
                        <li className="list-disc">osoite </li>
                        <li className="list-disc">puhelinnumero ja sähköpostiosoite  </li>
                    </ul>
                    <p className="mb-1">
                    Asiakastiedot:
                    </p>
                    <ul className="pl-4 mb-2">
                        <li className="list-disc">tiedot ostetuista tuotteista / palveluista </li>
                        <li className="list-disc">asiakassuhteen alkamisaika </li>
                        <li className="list-disc">esitietolomakkeessa kysytyt taustatiedot koskien rekisteröidyn terveydentilaa </li>
                        <li className="list-disc">hoitojaksoa koskevat tiedot  </li>
                        <li className="list-disc">asiakasyhteydenotot ja niihin liittyvä kirjeenvaihto  </li>
                    </ul>

                    <h1 className="font-bold text-lg mb-2">
                    5. Rekisteröidyn oikeudet
                    </h1>
                    <p className="mb-2">
                    ‍Rekisteröidyllä on seuraavat oikeudet, joiden käyttämistä koskevat pyynnöt tulee tehdä osoitteeseen juho@relevium.fi
                    </p>
                    <p className="mb-2">
                    Tarkastusoikeus <br/>
                    Rekisteröity voi tarkistaa hänestä tallennetut henkilötiedot.
                    </p>
                    <p className="mb-2">
                    Oikeus tietojen oikaisemiseen <br/>
                    Rekisteröity voi pyytää oikaisemaan häntä koskevat virheelliset tai puutteelliset tiedot.
                    </p>
                    <p className="mb-2">
                    Vastustamisoikeus <br/>
                    Rekisteröity voi vastustaa henkilötietojen käsittelyä, mikäli kokee, että henkilötietoja on käsitelty lainvastaisesti.
                    </p>
                    <p className="mb-2">
                    Suoramarkkinointikielto <br/>
                    Rekisteröidyllä on oikeus kieltää tietojen käyttäminen suoramarkkinointiin.
                    </p>
                    <p className="mb-2">
                    Poisto-oikeus <br/>
                    Rekisteröidyllä on oikeus pyytää tietojen poistamista, jos tietojen käsittely ei ole tarpeen. Käsittelemme poistopyynnön, jonka jälkeen joko poistamme tiedot tai ilmoitamme perustellun syyn, miksi tietoja ei voida poistaa. Pyyntö käsitellään säädetyssä yhden kuukauden määräajassa. On huomioitava, että rekisterinpitäjällä voi olla lakisääteinen tai muu oikeus olla poistamatta pyydettyä tietoa. Rekisterinpitäjällä on velvollisuus säilyttää kirjanpitoaineisto Kirjanpitolaissa (luku 2, 10 §) määritellyn ajan (10 vuotta) mukaisesti. Tämän vuoksi kirjanpitoon liittyvää aineistoa ei voida poistaa ennen määräajan umpeutumista.
                    </p>
                    <p className="mb-2">
                    Suostumuksen peruuttaminen <br/>
                    Jos rekisteröityä koskeva henkilötietojen käsittely perustuu ainoastaan suostumukseen, eikä esim. asiakkuuteen tai jäsenyyteen, voi rekisteröity peruuttaa suostumuksen. Rekisteröity voi valittaa päätöksestä tietosuojavaltuutetulle Rekisteröidyllä on oikeus vaatia, että rajoitamme kiistanalaisten tietojen käsittelyä siksi aikaa, kunnes asia saadaan ratkaistua.
                    </p>
                    <p className="mb-2">
                    Valitusoikeus <br/>
                    Rekisteröidyllä on oikeus tehdä valitus tietosuojavaltuutetulle kantelu, jos hän kokee, että rikomme henkilötietoja käsitellessämme voimassa olevaa tietosuojalainsäädäntöä. Tietosuojavaltuutetun yhteystiedot: www.tietosuoja.fi/fi/index/yhteystiedot.html 
                    </p>


                    <h1 className="font-bold text-lg mb-2">
                    6. Säännönmukaiset tietolähteet
                    </h1>
                    <p className="mb-2">
                    ‍Tietoja kertyy yrityksen omassa toiminnassa. Tiedot saadaan rekisteröidyiltä henkilöiltä itseltään hoito- tai palvelussuhteen alkaessa ja asiakassuhteen aikana. Tiedot, joita keräämme ovat aina asiakkaan itsensä meille luovuttamia. Emme kerää tietoja ulkopuoliselta taholta.  
                    </p>

                    <h1 className="font-bold text-lg mb-2">
                    7. Säännönmukaiset tietojen luovutukset
                    </h1>
                    <p className="mb-2">
                    ‍Henkilötiedot ovat salassa pidettäviä ja henkilökunnalla on salassapitovelvollisuus. Asiakasta koskevia tietoja luovutetaan vain asiakkaan omalla suostumuksella tai hänen laillisen edustajansa suostumuksella. Lupa tähän pyydetään rekisteritietolomakkeella hoitojakson alkaessa. Tietoja voidaan luovuttaa asiakkaalle itselleen, hoitojakson/lähetteen antaneelle taholle ja maksajataholle. Muussa tapauksessa henkilötietoja voidaan luovuttaa ainoastaan kulloinkin voimassa olevan lainsäädännön sallimissa ja velvoittamissa rajoissa.  
                    </p>

                    <h1 className="font-bold text-lg mb-2">
                    8. Käsittelyn kesto
                    </h1>
                    <p className="mb-2">
                    ‍Henkilötietoja käsitellään pääsääntöisesti niin kauan, kuin asiakkuus on voimassa tai lainsäädäntö vaatii (mm. potilasasiakirjat). 
                    </p>

                    <h1 className="font-bold text-lg mb-2">
                    9. Henkilötietojen käsittelijät
                    </h1>
                    <p className="mb-2">
                    ‍Henkilötietojen käsittelijänä toimii toiminimiyrittäjä Juho Heikkilä (Relevium). Voimme myös ulkoistaa henkilötietojen käsittelyn osittain kolmannelle osapuolelle, jolloin takaamme sopimusjärjestelyin, että henkilötietoja käsitellään voimassa olevan tietosuojalainsäädännön mukaisesti ja muutoin asianmukaisesti. Kirjanpito, laskutus ja tekninen tuki on ulkoistettu.  
                    </p>

                    <h1 className="font-bold text-lg mb-2">
                    10. Tietojen siirto EU:n tai ETA:n ulkopuolelle
                    </h1>
                    <p className="mb-2">
                    ‍Henkilötietoja ei siirretä EU:n tai ETA:n ulkopuolelle.
                    </p>
                    <h1 className="font-bold text-lg mb-2">
                    11. Rekisterin suojauksen periaatteet
                    </h1>
                    <p className="mb-2">
                    ‍Manuaalinen aineisto <br/>
                    Kaikki tiedot ovat salassa pidettäviä. Paperisessa muodossa olevat henkilöasiakirjat säilytetään lukituissa arkistokaapeissa. 
                    </p>
                    <p className="mb-2">
                    Sähköinen aineisto <br/>
                    Vello. Asiakastiedot on tallennettu Vellon ajanvarausjärjestelmän tietokantaan. Tietoja voi selata ainoastaan ohjelman kautta. Järjestelmään pääsy vaatii käyttäjätunnuksen ja salasanan. Tähän sähköiseen järjestelmään pääsy on aina salasanan takana. Tietoja käsittelee vain yrittäjä itse. 
                    </p>
                    <p className="mb-2">
                    Laskutusohjelma, asiakasyhteydenotot Näihin sähköisiin järjestelmiin pääsy on aina salasanan takana. Tietoja käsittelee vain yrittäjä itse. 
                    </p>

                    <h1 className="font-bold text-lg mb-2">
                    12. Automaattinen päätöksenteko ja profilointi
                    </h1>
                    <p className="mb-2">
                    ‍Relevium ei käytä automaattista päätöksentekoa tai profilointia.
                    </p>
                </div>
                <div className="modal-action"></div>
            </div>
        </div>
    
    </div>
  )
}

export default Tietosuoja
