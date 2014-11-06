/**
 * Created by adminpc on 4/15/14.
 */
describe("Cryptogram Processing Specs", function(){
    var plainLetterOne = "Wikipedia is a collaboratively edited, multilingual, free Internet encyclopedia that is supported by the non-profit Wikimedia Foundation. Volunteers worldwide collaboratively write Wikipedia's 30 million articles in 287 languages, including over 4.4 million ";
    var cipherLetterOne = "RPGPFSHPL PA L TEKKLQEXLYPMSKJ SHPYSH, OWKYPKPUNWLK, VXSS PUYSXUSY SUTJTKEFSHPL YILY PA AWFFEXYSH QJ YIS UEU-FXEVPY RPGPOSHPL VEWUHLYPEU. MEKWUYSSXA REXKHRPHS TEKKLQEXLYPMSKJ RXPYS RPGPFSHPL'A 30 OPKKPEU LXYPTKSA PU 287 KLUNWLNSA, PUTKWHPUN EMSX 4.4 OPKK";
    //Thanks to http://www.wordles.com/getmycrypto.aspx for the quick conversion.
    describe("Analysis Specs", function(){
        describe("Letter Frequency Specs", function(){
            describe("Obtaining The Frequency Specs", function(){
                it("should find the frequency of each letter", function(){
                    var item = getLetterFreq(plainLetterOne); console.log(item);
                    expect(item).not.toBeNull();
                });
            });
        });
    });
});