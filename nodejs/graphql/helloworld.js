const express = require('express');
const {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');

//定义schema,查询和类型
const schema = buildSchema(`
type Query{
    hello:String
}
`);

const root = {
    hello:() =>{
        return "hello world";
    }
}
//定义查询的处理器
const app = express();
app.use('/', graphqlHTTP)({
    schema:schema,
    rootValue: root,
    graphiql: true
})

app.listen(3000);

module.exports = router;