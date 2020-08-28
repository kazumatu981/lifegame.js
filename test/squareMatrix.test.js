//#region test utilities
function testSuareMatrix(x, SIZE) {
    expect(Array.isArray(x._matrix)).to.be.true;
    expect(x._matrix.every((row)=>Array.isArray(row))).to.be.true;
    expect(x._matrix.length).to.equal(SIZE);
    expect(x._matrix.every((row)=>row.length == SIZE)).to.be.true;
};
function testMatrixAllZERO(x) {
    expect(x._matrix.every((row)=>
        row.every((item)=>item==0))).to.be.true;
}
function testSameMatrix(a,b) {
    
    expect(a.every((row,ix)=>
        row.every((item,iy) => a[ix][iy] == b[ix][iy]))).to.be.true;
}
//#endregion


describe('Tests of SquareMatrix calss', ()=>{
    describe('constructors',()=>{
        describe('undefined',()=>{
            it(`By default, MUST create ${DEFAULT_SIZE} ZERO matrix`, ()=>{
                const x = new SquaredMatrix();
                testSuareMatrix(x, DEFAULT_SIZE);
                testMatrixAllZERO(x);
            });
        });
        describe('number', ()=>{
            it('positive number MUST create square ZERO matrix',()=>{
                const x = new SquaredMatrix(10);
                testSuareMatrix(x, 10);
                testMatrixAllZERO(x);
            });
            it('negative number MUST throw Exception',()=>{
                expect(()=>{
                    new SquaredMatrix(-5);
                }).to.throw();
            });
        });
    });

    describe('Safe Getter/Setter', ()=>{

    })
});
