/**
 * Created by adminpc on 4/15/14.
 */
describe("Cryptogram Processing Specs", function () {
    var plainLetterOne = "Wikipedia is a collaboratively edited, multilingual, free Internet encyclopedia that is supported by the non-profit Wikimedia Foundation. Volunteers worldwide collaboratively write Wikipedia's 30 million articles in 287 languages, including over 4.4 million ";
    var cipherLetterOne = "RPGPFSHPL PA L TEKKLQEXLYPMSKJ SHPYSH, OWKYPKPUNWLK, VXSS PUYSXUSY SUTJTKEFSHPL YILY PA AWFFEXYSH QJ YIS UEU-FXEVPY RPGPOSHPL VEWUHLYPEU. MEKWUYSSXA REXKHRPHS TEKKLQEXLYPMSKJ RXPYS RPGPFSHPL'A 30 OPKKPEU LXYPTKSA PU 287 KLUNWLNSA, PUTKWHPUN EMSX 4.4 OPKK";
    //Thanks to http://www.wordles.com/getmycrypto.aspx for the quick conversion.

    //http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html
    /*
     Letter	Count	 	Letter	Frequency
     E	21912	 	E	12.02
     T	16587	 	T	9.10
     A	14810	 	A	8.12
     O	14003	 	O	7.68
     I	13318	 	I	7.31
     N	12666	 	N	6.95
     S	11450	 	S	6.28
     R	10977	 	R	6.02
     H	10795	 	H	5.92
     D	7874	 	D	4.32
     L	7253	 	L	3.98
     U	5246	 	U	2.88
     C	4943	 	C	2.71
     M	4761	 	M	2.61
     F	4200	 	F	2.30
     Y	3853	 	Y	2.11
     W	3819	 	W	2.09
     G	3693	 	G	2.03
     P	3316	 	P	1.82
     B	2715	 	B	1.49
     V	2019	 	V	1.11
     K	1257	 	K	0.69
     X	315	 	X	0.17
     Q	205	 	Q	0.11
     J	188	 	J	0.10
     Z	128	 	Z	0.07
     * \*/
    // ETAOINSRHDLUCMFYWGPBVKXOJZ
    describe("Analysis Specs", function () {
        describe("Letter Frequency Specs", function () {
            describe("Obtaining The Frequency Specs", function () {
                it("should find the frequency of each letter", function () {
                    var item = getLetterFreq(plainLetterOne); //console.log(item);
                    expect(item).not.toBeNull();
                });

                it("should have no zero percent letters", function () {
                    var item = getLetterFreq(plainLetterOne);
                    var zeroPercentLetterFound = 0;
                    //I don't like this and it needs some serious refactoring. I've been up for 33 hours now and am having logical thinking issues.
                    for (var i in item) {

                        if (i.charAt(0).indexOf("0") < 0 && i.charAt(1).indexOf("0") > 0) {
                            zeroPercentLetterFound = 1;
                            return;
                        } else {
                            //console.log(i + " : " + item[i]);

                        }
                    }
                    expect(zeroPercentLetterFound).not.toBeGreaterThan(0);
                });
                it("should list the letters and their frequency", function () {
                    var item = getLetterFreq(plainLetterOne);
                    var boolHasPercent = false;
                    var newArray = sortAscending(item);
                    var plainTextLength = plainLetterOne.length;

                    for (var i in item) {
                        var percent = ((item[i]/plainTextLength)* 100).toFixed(3);
                        if(percent < 0){
                            boolHasPercent = true;

                        }
                        expect(boolHasPercent).toBeFalsy();

                     /*  var punctionorsymbolslist = "!@#$%^.,?&*'() {}[]///\/|";
                        var punccheck = punctionorsymbolslist.indexOf(i);
                        if (punccheck < 0) {

                            console.log(i + " : " + ((item[i]/plainTextLength)* 100).toFixed(3) + "%");

                        }*/
                    }
                   /* for (var i in newArray){
                        console.log("item " + i + " : " + item[i]);
                    }*/
                });
            });
        });
    });
});

/*
 * I've forgotten the direction I wanted to take with this, since it's been a while and I've been working with Python (hacking course) and C# (work) for the past 6-ish months.
 * */