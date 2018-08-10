#include "arch.h"
#include "ecp_GOLDILOCKS.h"

namespace GOLDILOCKS {

/* Curve GOLDILOCKS */

#if CHUNK==16

#error Not supported

#endif

#if CHUNK==32

using namespace B448_29;

const int CURVE_Cof_I=4;
const BIG CURVE_Cof= {0x4,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0};
const int CURVE_A= 1;
const int CURVE_B_I= -39081;
const BIG CURVE_B= {0x1FFF6756,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FDFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFF};
const BIG CURVE_Order= {0xB5844F3,0x1BC61495,0x1163D548,0x1984E51B,0x3690216,0xDA4D76B,0xFA7113B,0x1FEF9944,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x1FFFFFFF,0x7FF};
const BIG CURVE_Gx= {0x15555555,0xAAAAAAA,0x15555555,0xAAAAAAA,0x15555555,0xAAAAAAA,0x15555555,0x152AAAAA,0xAAAAAAA,0x15555555,0xAAAAAAA,0x15555555,0xAAAAAAA,0x15555555,0xAAAAAAA,0x1555};
const BIG CURVE_Gy= {0xA9386ED,0x1757DE6F,0x13681AF6,0x19657DA3,0x3098BBB,0x12C19D15,0x12E03595,0xE515B18,0x17B7E36D,0x1AC426E,0xDBB5E8,0x10D8560,0x159D6205,0xB8246D9,0x17A58D2B,0x15C0};

#endif

#if CHUNK==64

using namespace B448_58;

const int CURVE_Cof_I=4;
const BIG CURVE_Cof= {0x4L,0x0L,0x0L,0x0L,0x0L,0x0L,0x0L,0x0L};
const int CURVE_A= 1;
const int CURVE_B_I= -39081;
const BIG CURVE_B= {0x3FFFFFFFFFF6756L,0x3FFFFFFFFFFFFFFL,0x3FFFFFFFFFFFFFFL,0x3FBFFFFFFFFFFFFL,0x3FFFFFFFFFFFFFFL,0x3FFFFFFFFFFFFFFL,0x3FFFFFFFFFFFFFFL,0x3FFFFFFFFFFL};
const BIG CURVE_Order= {0x378C292AB5844F3L,0x3309CA37163D548L,0x1B49AED63690216L,0x3FDF3288FA7113BL,0x3FFFFFFFFFFFFFFL,0x3FFFFFFFFFFFFFFL,0x3FFFFFFFFFFFFFFL,0xFFFFFFFFFFL};
const BIG CURVE_Gx= {0x155555555555555L,0x155555555555555L,0x155555555555555L,0x2A5555555555555L,0x2AAAAAAAAAAAAAAL,0x2AAAAAAAAAAAAAAL,0x2AAAAAAAAAAAAAAL,0x2AAAAAAAAAAL};
const BIG CURVE_Gy= {0x2EAFBCDEA9386EDL,0x32CAFB473681AF6L,0x25833A2A3098BBBL,0x1CA2B6312E03595L,0x35884DD7B7E36DL,0x21B0AC00DBB5E8L,0x17048DB359D6205L,0x2B817A58D2BL};
#endif

}
