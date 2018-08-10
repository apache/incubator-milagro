#include "arch.h"
#include "fp_BLS24.h"

/* Curve BLS24 - Pairing friendly BLS24 curve */

#if CHUNK==16

#error Not supported

#endif

#if CHUNK==32
// Base Bits= 29
// Base Bits= 29
const BIG_480_29 Modulus_BLS24= {0xA06152B,0x2260B3A,0xB4C36BE,0x5FFC5D0,0xBDB6A64,0x5B78E2E,0x1C1A28CA,0x10E6441B,0x1F244061,0xB4704F0,0x141E5CCD,0x9837504,0x3F2E77E,0xD763740,0x1316EA0E,0xF0079,0x555C};
const BIG_480_29 R2modp_BLS24= {0x8533EA9,0x6A02789,0x183B24DE,0x1E45ECF8,0xC8F8F37,0x10CAD209,0x4C0C4B8,0x9B1FABD,0xDEBE4C0,0xDC353F9,0x18A18E26,0x10F489BB,0x31206A5,0x19673BBF,0x6BE69F9,0xB091169,0x9CD};
const chunk MConst_BLS24= 0x95FE7D;
const BIG_480_29 Fra_BLS24= {0x1BF96F1D,0xAE53A55,0x31BFEEB,0x183FF17A,0x6237469,0x12A4F4F1,0x12101FE3,0x16E79D94,0xFF59267,0x5EB4EB4,0x78CC49F,0x274BA33,0x149184F3,0x16C6DCBA,0x1C90B694,0x10F729CE,0x4BBC};
const BIG_480_29 Frb_BLS24= {0xE0CA60E,0x1740D0E4,0x83037D2,0xDBFD456,0x5B7F5FA,0x1312993D,0xA0A08E6,0x19FEA687,0xF2EADF9,0x55BB63C,0xC91982E,0x70EBAD1,0xF61628B,0x16AF5A85,0x16863379,0xF17D6AA,0x99F};

#endif

#if CHUNK==64
// Base Bits= 56
const BIG_480_56 Modulus_BLS24= {0x44C1674A06152BL,0xFFE2E82D30DAF8L,0x6F1C5CBDB6A642L,0x3220DF068A328BL,0xE09E1F24406187L,0xBA825079733568L,0x6E803F2E77E4C1L,0x3CCC5BA839AECL,0x555C0078L};
const BIG_480_56 R2modp_BLS24= {0x6A4A1FE013DF5BL,0xE8E46D4D1BDE65L,0x1F841391F45C67L,0x9148A4516FB28L,0x4398524EDF4C88L,0x41C0E241B6DCE8L,0xE42C208C19411L,0xA7FE6FD73A7B1CL,0xFCCCA76L};
const chunk MConst_BLS24= 0xBD5D7D8095FE7DL;
const BIG_480_56 Fra_BLS24= {0x5CA74ABBF96F1DL,0x1FF8BD0C6FFBADL,0x49E9E26237469CL,0x3CECA48407F8E5L,0x69D68FF59267B7L,0x5D199E33127CBDL,0xB97549184F313AL,0x4E77242DA52D8DL,0x4BBC87B9L};
const BIG_480_56 Frb_BLS24= {0xE81A1C8E0CA60EL,0xDFEA2B20C0DF4AL,0x25327A5B7F5FA6L,0xF5343A828239A6L,0x76C78F2EADF9CFL,0x5D68B24660B8ABL,0xB50AF61628B387L,0xB555A18CDE6D5EL,0x99F78BEL};


#endif