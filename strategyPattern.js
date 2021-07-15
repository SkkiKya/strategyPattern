class Strategy
{
  calculate(a, b)
  {

  }

}


//　加算クラス

class Addtion extends Strategy
{
  calculate(a, b)
  {
    return a + b;
  }
}

// 減算クラス

class Subtration extends Strategy
{
  calculate(a, b)
  {
    return a - b;
  }
}


// 乗算クラス
class Multiplication extends Strategy
{
  calculate(a, b)
  {
    return a * b;
  }
}

// 除算クラス
class Division extends Strategy
{
  calculate(a, b)
  {
    return a / b;
  }
}

// コンテキストクラス

class Context
{
  constructor(strategy)
  {
    this.strategy = strategy;
  }

  calculate(a, b)
  {
    return this.strategy.calculate(a, b);
  }
}


// インスタンス作成
     const add = new Context(new Addtion());
const subtrate = new Context(new Subtration());
const multiple = new Context(new Multiplication());
  const divide = new Context(new Division());


console.log(add.calculate(4, 2));
console.log(subtrate.calculate(4, 2));
console.log(multiple.calculate(4, 2));
console.log(divide.calculate(4, 2));
