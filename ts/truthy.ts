const aString = '';
if (aString) console.log('aString Check passed!');

// - - - - - - - - - - - - - - - - - - - - - - - - - - -

const aZero = 0;
if (aZero) console.log('aZero Check passed!');

// - - - - - - - - - - - - - - - - - - - - - - - - - - -

const aNaN = NaN;
if (aNaN) console.log('aNaN Check passed!');

// - - - - - - - - - - - - - - - - - - - - - - - - - - -

const a0n = 0n;
if (a0n) console.log('a0n Check passed!');

// - - - - - - - - - - - - - - - - - - - - - - - - - - -

const aNull = null;
if (aNull) console.log('aNull Check passed!');

// - - - - - - - - - - - - - - - - - - - - - - - - - - -

const anUndefined = undefined;
if (anUndefined) console.log('anUndefined Check passed!');

// - - - - - - - - - - - - - - - - - - - - - - - - - - -

const aNullTypeOf = null;
if (typeof aNullTypeOf === 'null') console.log('aNullTypeOf Check passed!');
