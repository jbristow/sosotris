import leMat from "./assets/cards/Le_Mat.png";
import leBateleur from "./assets/cards/I_Le_Bateleur.png";
import junon from "./assets/cards/II_Junon.png";
import lImperatrice from "./assets/cards/III_L_Imperatrice.png";
import jupiter from "./assets/cards/V_Jupiter.png";
import lesAmoureux from "./assets/cards/VI_Les_Amoureux.png";
import leChariot from "./assets/cards/VII_Le_Chariot.png";
import laForce from "./assets/cards/VIII_La_Force.png";
import lErmite from "./assets/cards/IX_L_Ermite.png";
import laRoueDeFortune from "./assets/cards/X_La_Roue_de_Fortune.png";
import laJustice from "./assets/cards/XI_La_Justice.png";
import lePendu from "./assets/cards/XII_Le_Pendu.png";
import laMort from "./assets/cards/XIII_La_Mort.png";
import temperance from "./assets/cards/XIV_Temperance.png";
import leDiable from "./assets/cards/XV_Le_Diable.png";
import laMaisonDieu from "./assets/cards/XVI_La_Maison_Dieu.png";
import lEtoile from "./assets/cards/XVII_L_Etoile.png";
import laLune from "./assets/cards/XVIII_La_Lune.png";
import leSoleil from "./assets/cards/XIX_Le_Soleil.png";
import leJugement from "./assets/cards/XX_Le_Jugement.png";
import leMonde from "./assets/cards/XXI_Le_Monde.png";
import roiEpee from "./assets/cards/Roi_d_Epee.png";
import reineEpee from "./assets/cards/Reine_d_Epee.png";
import chevalierEpee from "./assets/cards/Chevalier_d_Epee.png";
import valetEpee from "./assets/cards/Valet_d_Epee.png";
import xEpee from "./assets/cards/X_d_Epee.png";
import ixEpee from "./assets/cards/IX_d_Epee.png";
import viiiEpee from "./assets/cards/VIII_d_Epee.png";
import viiEpee from "./assets/cards/VII_d_Epee.png";
import viEpee from "./assets/cards/VI_d_Epee.png";
import vEpee from "./assets/cards/V_d_Epee.png";
import ivEpee from "./assets/cards/IV_d_Epee.png";
import iiiEpee from "./assets/cards/III_d_Epee.png";
import iiEpee from "./assets/cards/II_d_Epee.png";
import iEpee from "./assets/cards/I_d_Epee.png";
import roiBaton from "./assets/cards/Roi_de_Baton.png";
import reineBaton from "./assets/cards/Reine_de_Baton.png";
import chevalierBaton from "./assets/cards/Chevalier_de_Baton.png";
import valetBaton from "./assets/cards/Valet_de_Baton.png";
import xBaton from "./assets/cards/X_de_Baton.png";
import ixBaton from "./assets/cards/IX_de_Baton.png";
import viiiBaton from "./assets/cards/VIII_de_Baton.png";
import viiBaton from "./assets/cards/VII_de_Baton.png";
import viBaton from "./assets/cards/VI_de_Baton.png";
import vBaton from "./assets/cards/V_de_Baton.png";
import ivBaton from "./assets/cards/IV_de_Baton.png";
import iiiBaton from "./assets/cards/III_de_Baton.png";
import iiBaton from "./assets/cards/II_de_Baton.png";
import iBaton from "./assets/cards/I_de_Baton.png";
import roiCoupe from "./assets/cards/Roi_de_Coupe.png";
import reineCoupe from "./assets/cards/Reine_de_Coupe.png";
import chevalierCoupe from "./assets/cards/Chevalier_de_Coupe.png";
import valetCoupe from "./assets/cards/Valet_de_Coupe.png";
import xCoupe from "./assets/cards/X_de_Coupe.png";
import ixCoupe from "./assets/cards/IX_de_Coupe.png";
import viiiCoupe from "./assets/cards/VIII_de_Coupe.png";
import viiCoupe from "./assets/cards/VII_de_Coupe.png";
import viCoupe from "./assets/cards/VI_de_Coupe.png";
import vCoupe from "./assets/cards/V_de_Coupe.png";
import ivCoupe from "./assets/cards/IV_de_Coupe.png";
import iiiCoupe from "./assets/cards/III_de_Coupe.png";
import iiCoupe from "./assets/cards/II_de_Coupe.png";
import iCoupe from "./assets/cards/I_de_Coupe.png";
import roiDenier from "./assets/cards/Roi_de_Denier.png";
import reineDenier from "./assets/cards/Reine_de_Denier.png";
import chevalierDenier from "./assets/cards/Chevalier_de_Denier.png";
import valetDenier from "./assets/cards/Valet_de_Denier.png";
import xDenier from "./assets/cards/X_de_Denier.png";
import ixDenier from "./assets/cards/IX_de_Denier.png";
import viiiDenier from "./assets/cards/VIII_de_Denier.png";
import viiDenier from "./assets/cards/VII_de_Denier.png";
import viDenier from "./assets/cards/VI_de_Denier.png";
import vDenier from "./assets/cards/V_de_Denier.png";
import ivDenier from "./assets/cards/IV_de_Denier.png";
import iiiDenier from "./assets/cards/III_de_Denier.png";
import iiDenier from "./assets/cards/II_de_Denier.png";
import iDenier from "./assets/cards/I_de_Denier.png";

export interface CardData {
  title: string;
  source: string;
  meaning: string;
  reversed: string;
}

export function unshuffled(): string[] {
  return Object.keys(CARD_DB);
}

export const CARD_DB: { [key: string]: CardData } = {
  "Le Mat": {
    title: "Le Mat",
    source: leMat,
    meaning:
      "Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.",
    reversed:
      "Negligence, absence, distribution, carelessness, apathy, nullity, vanity.",
  },
  "I: Le Bateleur": {
    title: "I: Le Bateleur",
    source: leBateleur,
    meaning:
      "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
    reversed: "Physician, Magus, mental disease, disgrace, disquiet.",
  },
  "II: Junon": {
    title: "II: Junon",
    source: junon,
    meaning:
      "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.",
    reversed: "Passion, moral or physical ardour, conceit, surface knowledge.",
  },
  "III: L'Imperatrice": {
    title: "III: L'Impératrice",
    source: lImperatrice,
    meaning:
      "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.",
    reversed:
      "Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
  },
  "V: Jupiter": {
    title: "V: Jupiter",
    source: jupiter,
    meaning:
      "Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.",
    reversed: "Society, good understanding, concord, overkindness, weakness.",
  },
  "VI: Les Amoureux": {
    title: "VI: Les Amoureux",
    source: lesAmoureux,
    meaning: "Attraction, love, beauty, trials overcome.",
    reversed:
      "Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.",
  },
  "VII: Le Chariot": {
    title: "VII: Le Chariot",
    source: leChariot,
    meaning:
      "Succour, providence; also war, triumph, presumption, vengeance, trouble.",
    reversed: "Riot, quarrel, dispute, litigation, defeat.",
  },
  "VIII: La Force": {
    title: "VIII: La Force",
    source: laForce,
    meaning:
      "Power, energy, action, courage, magnanimity; also complete success and honours.",
    reversed:
      "Despotism, abuse of power, weakness, discord, sometimes even disgrace.",
  },
  "IX: L'Ermite": {
    title: "IX: L'Ermite",
    source: lErmite,
    meaning:
      "Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.",
    reversed: "Concealment, disguise, policy, fear, unreasoned caution.",
  },
  "X: La Roue de Fortune": {
    title: "X: La Roue de Fortune",
    source: laRoueDeFortune,
    meaning: "Destiny, fortune, success, elevation, luck, felicity.",
    reversed: "Increase, abundance, superfluity.",
  },
  "XI: La Justice": {
    title: "XI: La Justice",
    source: laJustice,
    meaning:
      "Equity, rightness, probity, executive; triumph of the deserving side in law.",
    reversed:
      "Law in all its departments, legal complications, bigotry, bias, excessive severity.",
  },
  "XII: Le Pendu": {
    title: "XII: Le Pendu",
    source: lePendu,
    meaning:
      "Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.",
    reversed: "Selfishness, the crowd, body politic.",
  },
  "XIII: La Mort": {
    title: "XIII: La Mort",
    source: laMort,
    meaning:
      "End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.",
    reversed:
      "Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.",
  },
  "XIV: Temperance": {
    title: "XIV: Temperance",
    source: temperance,
    meaning: "Economy, moderation, frugality, management, accommodation.",
    reversed:
      "Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent; also disunion, unfortunate combinations, competing interests.",
  },
  "XV: Le Diable": {
    title: "XV: Le Diable",
    source: leDiable,
    meaning:
      "Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.",
    reversed: "Evil fatality, weakness, pettiness, blindness.",
  },
  "XVI: La Maison Dieu": {
    title: "XVI: La Maison Dieu",
    source: laMaisonDieu,
    meaning:
      "Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.",
    reversed:
      "According to one account, the same in a lesser degree also oppression, imprisonment, tyranny.",
  },
  "XVII: L'Etoile": {
    title: "XVII: L'Etoile",
    source: lEtoile,
    meaning:
      "Loss, theft, privation, abandonment; another reading says-hope and bright prospects",
    reversed: "Arrogance, haughtiness, impotence.",
  },
  "XVIII: La Lune": {
    title: "XVIII: La Lune",
    source: laLune,
    meaning:
      "Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.",
    reversed:
      "Instability, inconstancy, silence, lesser degrees of deception and error.",
  },
  "XIX: Le Soleil": {
    title: "XIX: Le Soleil",
    source: leSoleil,
    meaning: "Material happiness, fortunate marriage, contentment.",
    reversed:
      "Material happiness, fortunate marriage, contentment -- in a lesser sense.",
  },
  "XX: Le Jugement": {
    title: "XX: Le Jugement",
    source: leJugement,
    meaning:
      "Change of position, renewal, outcome. Another account specifies total loss though lawsuit.",
    reversed:
      "Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.",
  },
  "XXI: Le Monde": {
    title: "XXI: Le Monde",
    source: leMonde,
    meaning:
      "Assured success, recompense, voyage, route, emigration, flight, change of place.",
    reversed: "Inertia, fixity, stagnation, permanence.",
  },
  "Roi d'Epee": {
    title: "Roi d'Épée",
    source: roiEpee,
    meaning:
      "Whatsoever arises out of the idea of judgment and all its connexions-power, command, authority, militant intelligence, law, offices of the crown, and so forth.",
    reversed: "Cruelty, perversity, barbarity, perfidy, evil intention.",
  },
  "Reine d'Epee": {
    title: "Reine d'Épée",
    source: reineEpee,
    meaning:
      "Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.",
    reversed: "Malice, bigotry, artifice, prudery, bale, deceit.",
  },
  "Chevalier d'Epee": {
    title: "Chevalier d'Épée",
    source: chevalierEpee,
    meaning:
      "Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin. There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.",
    reversed: "Imprudence, incapacity, extravagance.",
  },
  "Valet d'Epee": {
    title: "Valet d'Épée",
    source: valetEpee,
    meaning:
      "Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.",
    reversed:
      "More evil side of these qualities (authority, overseeing, secret service, vigilance, spying, examination); what is unforeseen, unprepared state; sickness is also intimated.",
  },
  "X d'Epee": {
    title: "X d'Épée",
    source: xEpee,
    meaning:
      "Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.",
    reversed:
      "Advantage, profit, success, favour, but none of these are permanent; also power and authority.",
  },
  "IX d'Epee": {
    title: "IX d'Épée",
    source: ixEpee,
    meaning:
      "Death, failure, miscarriage, delay, deception, disappointment, despair.",
    reversed: "Imprisonment, suspicion, doubt, reasonable fear, shame.",
  },
  "VIII d'Epee": {
    title: "VIII d'Épée",
    source: viiiEpee,
    meaning:
      "Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.",
    reversed:
      "Disquiet, difficulty, opposition, accident, treachery; what is unforeseen; fatality.",
  },
  "VII d'Epee": {
    title: "VII d'Épée",
    source: viiEpee,
    meaning:
      "Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other.",
    reversed: "Good advice, counsel, instruction, slander, babbling.",
  },
  "VI d'Epee": {
    title: "VI d'Épée",
    source: viEpee,
    meaning: "journey by water, route, way, envoy, commissionary, expedient.",
    reversed:
      "Declaration, confession, publicity; one account says that it is a proposal of love.",
  },
  "V d'Epee": {
    title: "V d'Épée",
    source: vEpee,
    meaning:
      "Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.",
    reversed:
      "Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.; burial and obsequies.",
  },
  "IV d'Epee": {
    title: "IV d'Épée",
    source: ivEpee,
    meaning:
      "Vigilance, retreat, solitude, hermit's repose, exile, tomb and coffin. It is these last that have suggested the design.",
    reversed:
      "Wise administration, circumspection, economy, avarice, precaution, testament.",
  },
  "III d'Epee": {
    title: "III d'Épée",
    source: iiiEpee,
    meaning:
      "Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration",
    reversed:
      "Mental alienation, error, loss, distraction, disorder, confusion.",
  },
  "II d'Epee": {
    title: "II d'Épée",
    source: iiEpee,
    meaning:
      "Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy. The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs.",
    reversed: "Imposture, falsehood, duplicity, disloyalty.",
  },
  "I d'Epee": {
    title: "I d'Épée",
    source: iEpee,
    meaning:
      "Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling.",
    reversed:
      "Triumph, the excessive degree in everything, conquest, triumph of force, but the results are disastrous; another account says—conception, childbirth, augmentation, multiplicity.",
  },
  "Roi de Baton": {
    title: "Roi de Bâton",
    source: roiBaton,
    meaning:
      "Dark man, friendly, countryman, generally married, honest and conscientious. The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long.",
    reversed: "Good, but severe; austere, yet tolerant.",
  },
  "Reine de Baton": {
    title: "Reine de Bâton",
    source: reineBaton,
    meaning:
      "A dark woman, countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money, or a certain success in business",
    reversed:
      "Good, economical, obliging, serviceable. Signifies also—but in certain positions and in the neighbourhood of other cards tending in such directions—opposition, jealousy, even deceit and infidelity.",
  },
  "Chevalier de Baton": {
    title: "Chevalier de Bâton",
    source: chevalierBaton,
    meaning:
      "Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.",
    reversed: "Rupture, division, interruption, discord.",
  },
  "Valet de Baton": {
    title: "Valet de Bâton",
    source: valetBaton,
    meaning:
      "Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.",
    reversed:
      "Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.",
  },
  "X de Baton": {
    title: "X de Bâton",
    source: xBaton,
    meaning:
      "A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.",
    reversed: "Contrarieties, difficulties, intrigues, and their analogies.",
  },
  "IX de Baton": {
    title: "IX de Bâton",
    source: ixBaton,
    meaning:
      "The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts—delay, suspension, adjournment.",
    reversed: "Obstacles, adversity, calamity.",
  },
  "VIII de Baton": {
    title: "VIII de Bâton",
    source: viiiBaton,
    meaning:
      "Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.",
    reversed:
      "Arrows of jealousy, internal dispute, stingings of conscience, quarrels; and domestic disputes for persons who are married.",
  },
  "VII de Baton": {
    title: "VII de Bâton",
    source: viiBaton,
    meaning:
      "It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business—negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.",
    reversed:
      "Perplexity, embarrassments, anxiety. It is also a caution against indecision.",
  },
  "VI de Baton": {
    title: "VI de Bâton",
    source: viBaton,
    meaning:
      "The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King's courier; it is expectation crowned with its own desire, the crown of hope, and so forth.",
    reversed:
      "Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty, as of gates being opened to the enemy; also indefinite delay.",
  },
  "V de Baton": {
    title: "V de Bâton",
    source: vBaton,
    meaning:
      "Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.",
    reversed: "Litigation, disputes, trickery, contradiction.",
  },
  "IV de Baton": {
    title: "IV de Bâton",
    source: ivBaton,
    meaning:
      "They are for once almost on the surface—country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these.",
    reversed:
      "The meaning remains unaltered; it is prosperity, increase, felicity, beauty, embellishment.",
  },
  "III de Baton": {
    title: "III de Baton",
    source: iiiBaton,
    meaning:
      "He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.",
    reversed:
      "The end of troubles, suspension or cessation of adversity, toil and disappointment.",
  },
  "II de Baton": {
    title: "II de Bâton",
    source: iiBaton,
    meaning:
      "Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world's wealth.",
    reversed: "Surprise, wonder, enchantment, emotion, trouble, fear.",
  },
  "I de Baton": {
    title: "I de Bâton",
    source: iBaton,
    meaning:
      "Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.",
    reversed:
      "Fall, decadence, ruin, perdition, to perish also a certain clouded joy.",
  },
  "Roi de Coupe": {
    title: "Roi de Coupe",
    source: roiCoupe,
    meaning:
      "Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence.",
    reversed:
      "Dishonest, double-dealing man; roguery, exaction, injustice, vice, scandal, pillage, considerable loss.",
  },
  "Reine de Coupe": {
    title: "Reine de Coupe",
    source: reineCoupe,
    meaning:
      "Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.",
    reversed:
      "The accounts vary; good woman; otherwise, distinguished woman but one not to be trusted; perverse woman; vice, dishonour, depravity.",
  },
  "Chevalier de Coupe": {
    title: "Chevalier de Coupe",
    source: chevalierCoupe,
    meaning:
      "Arrival, approach—sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.",
    reversed: "Trickery, artifice, subtlety, swindling, duplicity, fraud.",
  },
  "Valet de Coupe": {
    title: "Valet de Coupe",
    source: valetCoupe,
    meaning:
      "Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business.",
    reversed: "Taste, inclination, attachment, seduction, deception, artifice.",
  },
  "X de Coupe": {
    title: "X de Coupe",
    source: xCoupe,
    meaning:
      "Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent's interests; also the town, village or country inhabited by the Querent.",
    reversed: "Repose of the false heart, indignation, violence.",
  },
  "IX de Coupe": {
    title: "IX de Coupe",
    source: ixCoupe,
    meaning:
      "Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.",
    reversed:
      "Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.",
  },
  "VIII de Coupe": {
    title: "VIII de Coupe",
    source: viiiCoupe,
    meaning:
      "The card speaks for itself on the surface, but other readings are entirely antithetical—giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence—either for good or evil.",
    reversed: "Great joy, happiness, feasting.",
  },
  "VII de Coupe": {
    title: "VII de Coupe",
    source: viiCoupe,
    meaning:
      "Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.",
    reversed: "Desire, will, determination, project.",
  },
  "VI de Coupe": {
    title: "VI de Coupe",
    source: viCoupe,
    meaning:
      "A card of the past and of memories, looking back, as—for example—on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.",
    reversed: "The future, renewal, that which will come to pass presently.",
  },
  "V de Coupe": {
    title: "V de Coupe",
    source: vCoupe,
    meaning:
      "It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.",
    reversed:
      "News, alliances, affinity, consanguinity, ancestry, return, false projects.",
  },
  "IV de Coupe": {
    title: "IV de Coupe",
    source: ivCoupe,
    meaning:
      "Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.",
    reversed: "Novelty, presage, new instruction, new relations.",
  },
  "III de Coupe": {
    title: "III de Coupe",
    source: iiiCoupe,
    meaning:
      "The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing,",
    reversed:
      "Expedition, dispatch, achievement, end. It signifies also the side of excess in physical enjoyment, and the pleasures of the senses.",
  },
  "II de Coupe": {
    title: "II de Coupe",
    source: iiCoupe,
    meaning:
      "Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and—as a suggestion apart from all offices of divination—that desire which is not in Nature, but by which Nature is sanctified.",
    reversed: "Self-love, break-ups, disharmony, distrust.",
  },
  "I de Coupe": {
    title: "I de Coupe",
    source: iCoupe,
    meaning:
      "House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.",
    reversed: "House of the false heart, mutation, instability, revolution.",
  },
  "Roi de Denier": {
    title: "Roi de Denier",
    source: roiDenier,
    meaning:
      "Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths.",
    reversed: "Vice, weakness, ugliness, perversity, corruption, peril.",
  },
  "Reine de Denier": {
    title: "Reine de Denier",
    source: reineDenier,
    meaning: "Opulence, generosity, magnificence, security, liberty.",
    reversed: "Evil, suspicion, suspense, fear, mistrust.",
  },
  "Chevalier de Denier": {
    title: "Chevalier de Denier",
    source: chevalierDenier,
    meaning:
      "Utility, serviceableness, interest, responsibility, rectitude - all on the normal and external plane.",
    reversed:
      "inertia, idleness, repose of that kind, stagnation; also placidity, discouragement, carelessness.",
  },
  "Valet de Denier": {
    title: "Valet de Denier",
    source: valetDenier,
    meaning:
      "Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management.",
    reversed:
      "Prodigality, dissipation, liberality, luxury; unfavourable news.",
  },
  "X de Denier": {
    title: "X de Denier",
    source: xDenier,
    meaning:
      "Gain, riches; family matters, archives, extraction, the abode of a family.",
    reversed:
      "Chance, fatality, loss, robbery, games of hazard; sometimes gift, dowry, pension.",
  },
  "IX de Denier": {
    title: "IX de Denier",
    source: ixDenier,
    meaning:
      "Prudence, safety, success, accomplishment, certitude, discernment.",
    reversed: "Roguery, deception, voided project, bad faith.",
  },
  "VIII de Denier": {
    title: "VIII de Denier",
    source: viiiDenier,
    meaning:
      "Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage.",
    reversed:
      "Voided ambition, vanity, cupidity, exaction, usury. It may also signify the possession of skill, in the sense of the ingenious mind turned to cunning and intrigue.",
  },
  "VII de Denier": {
    title: "VII de Denier",
    source: viiDenier,
    meaning:
      "These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels—and another innocence, ingenuity, purgation.",
    reversed:
      "Cause for anxiety regarding money which it may be proposed to lend.",
  },
  "VI de Denier": {
    title: "VI de Denier",
    source: viDenier,
    meaning:
      "Presents, gifts, gratification another account says attention, vigilance now is the accepted time, present prosperity, etc.",
    reversed: "Desire, cupidity, envy, jealousy, illusion.",
  },
  "V de Denier": {
    title: "V de Denier",
    source: vDenier,
    meaning:
      "The card foretells material trouble above all, whether in the form illustrated—that is, destitution—or otherwise. For some cartomancists, it is a card of love and lovers-wife, husband, friend, mistress; also concordance, affinities. These alternatives cannot be harmonized.",
    reversed: "Disorder, chaos, ruin, discord, profligacy.",
  },
  "IV de Denier": {
    title: "IV de Denier",
    source: ivDenier,
    meaning:
      "The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.",
    reversed: "Suspense, delay, opposition.",
  },
  "III de Denier": {
    title: "III de Denier",
    source: iiiDenier,
    meaning:
      "Métier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.",
    reversed:
      "Mediocrity, in work and otherwise, puerility, pettiness, weakness.",
  },
  "II de Denier": {
    title: "II de Denier",
    source: iiDenier,
    meaning:
      "On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment.",
    reversed:
      "Enforced gaiety, simulated enjoyment, literal sense, handwriting, composition, letters of exchange.",
  },
  "I de Denier": {
    title: "I de Denier",
    source: iDenier,
    meaning:
      "Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.",
    reversed:
      "The evil side of wealth, bad intelligence; also great riches. In any case it shews prosperity, comfortable material conditions, but whether these are of advantage to the possessor will depend on whether the card is reversed or not.",
  },
};
