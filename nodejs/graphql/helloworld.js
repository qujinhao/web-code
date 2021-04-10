const express = require('express');
const {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');

//����schema,��ѯ������
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
//�����ѯ�Ĵ�����
const app = express();
app.use('/', graphqlHTTP)({
    schema:schema,
    rootValue: root,
    graphiql: true
})

app.listen(3000);

module.exports = router;