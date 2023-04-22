import AClub from './assets/cards/A-Club.png';
import ADiamond from './assets/cards/A-Diamond.png';
import AHeart from './assets/cards/A-Heart.png';
import ASpade from './assets/cards/A-Spade.png';
import TwoClub from './assets/cards/2-Club.png';
import TwoDiamond from './assets/cards/2-Diamond.png';
import TwoHeart from './assets/cards/2-Heart.png';
import TwoSpade from './assets/cards/2-Spade.png';
import ThreeClub from './assets/cards/3-Club.png';
import ThreeDiamond from './assets/cards/3-Diamond.png';
import ThreeHeart from './assets/cards/3-Heart.png';
import ThreeSpade from './assets/cards/3-Spade.png';
import FourClub from './assets/cards/4-Club.png';
import FourDiamond from './assets/cards/4-Diamond.png';
import FourHeart from './assets/cards/4-Heart.png';
import FourSpade from './assets/cards/4-Spade.png';
import FiveClub from './assets/cards/5-Club.png';
import FiveDiamond from './assets/cards/5-Diamond.png';
import FiveHeart from './assets/cards/5-Heart.png';
import FiveSpade from './assets/cards/5-Spade.png';
import SixClub from './assets/cards/6-Club.png';
import SixDiamond from './assets/cards/6-Diamond.png';
import SixHeart from './assets/cards/6-Heart.png';
import SixSpade from './assets/cards/6-Spade.png';
import SevenClub from './assets/cards/7-Club.png';
import SevenDiamond from './assets/cards/7-Diamond.png';
import SevenHeart from './assets/cards/7-Heart.png';
import SevenSpade from './assets/cards/7-Spade.png';
import EightClub from './assets/cards/8-Club.png';
import EightDiamond from './assets/cards/8-Diamond.png';
import EightHeart from './assets/cards/8-Heart.png';
import EightSpade from './assets/cards/8-Spade.png';
import NineClub from './assets/cards/9-Club.png';
import NineDiamond from './assets/cards/9-Diamond.png';
import NineHeart from './assets/cards/9-Heart.png';
import NineSpade from './assets/cards/9-Spade.png';
import TenClub from './assets/cards/10-Club.png';
import TenDiamond from './assets/cards/10-Diamond.png';
import TenHeart from './assets/cards/10-Heart.png';
import TenSpade from './assets/cards/10-Spade.png';
import JClub from './assets/cards/J-Club.png';
import JDiamond from './assets/cards/J-Diamond.png';
import JHeart from './assets/cards/J-Heart.png';
import JSpade from './assets/cards/J-Spade.png';
import QClub from './assets/cards/Q-Club.png';
import QDiamond from './assets/cards/Q-Diamond.png';
import QHeart from './assets/cards/Q-Heart.png';
import QSpade from './assets/cards/Q-Spade.png';
import KClub from './assets/cards/K-Club.png';
import KDiamond from './assets/cards/K-Diamond.png';
import KHeart from './assets/cards/K-Heart.png';
import KSpade from './assets/cards/K-Spade.png';
import CardReverse from './assets/cards/Card-Reverse.png';
import Blank from './assets/cards/Blank.png';

const GetCards = e => {
  if (e === 'AClub') return AClub;
  if (e === 'ADiamond') return ADiamond;
  if (e === 'AHeart') return AHeart;
  if (e === 'ASpade') return ASpade;
  if (e === '2Club') return TwoClub;
  if (e === '2Diamond') return TwoDiamond;
  if (e === '2Heart') return TwoHeart;
  if (e === '2Spade') return TwoSpade;
  if (e === '3Club') return ThreeClub;
  if (e === '3Diamond') return ThreeDiamond;
  if (e === '3Heart') return ThreeHeart;
  if (e === '3Spade') return ThreeSpade;
  if (e === '4Club') return FourClub;
  if (e === '4Diamond') return FourDiamond;
  if (e === '4Heart') return FourHeart;
  if (e === '4Spade') return FourSpade;
  if (e === '5Club') return FiveClub;
  if (e === '5Diamond') return FiveDiamond;
  if (e === '5Heart') return FiveHeart;
  if (e === '5Spade') return FiveSpade;
  if (e === '6Club') return SixClub;
  if (e === '6Diamond') return SixDiamond;
  if (e === '6Heart') return SixHeart;
  if (e === '6Spade') return SixSpade;
  if (e === '7Club') return SevenClub;
  if (e === '7Diamond') return SevenDiamond;
  if (e === '7Heart') return SevenHeart;
  if (e === '7Spade') return SevenSpade;
  if (e === '8Club') return EightClub;
  if (e === '8Diamond') return EightDiamond;
  if (e === '8Heart') return EightHeart;
  if (e === '8Spade') return EightSpade;
  if (e === '9Club') return NineClub;
  if (e === '9Diamond') return NineDiamond;
  if (e === '9Heart') return NineHeart;
  if (e === '9Spade') return NineSpade;
  if (e === '10Club') return TenClub;
  if (e === '10Diamond') return TenDiamond;
  if (e === '10Heart') return TenHeart;
  if (e === '10Spade') return TenSpade;
  if (e === 'JClub') return JClub;
  if (e === 'JDiamond') return JDiamond;
  if (e === 'JHeart') return JHeart;
  if (e === 'JSpade') return JSpade;
  if (e === 'QClub') return QClub;
  if (e === 'QDiamond') return QDiamond;
  if (e === 'QHeart') return QHeart;
  if (e === 'QSpade') return QSpade;
  if (e === 'KClub') return KClub;
  if (e === 'KDiamond') return KDiamond;
  if (e === 'KHeart') return KHeart;
  if (e === 'KSpade') return KSpade;
  if (e === 'CardReverse') return CardReverse;
  if (e === 'CardBlank') return Blank;
};

export default GetCards;
