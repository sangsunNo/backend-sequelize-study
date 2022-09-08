// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model")

exports.get_visitors = (req,res) => {
    Visitor.findAll()
    .then((result) => {
        console.log( "result : ", result );
        console.log("index")
        res.render( "index", { data : result } );
    })
}

exports.post_comment = (req,res) => {
    var  data = {
        name: req.body.name,
        comment: req.body.comment
    };

    Visitor.create(data)
    .then((result) => {
        console.log( req.body );
        res.send({ id: result.id });
    })
}

exports.get_visitor = (req,res) => {
    Visitor.findAll({
    // Visitor.findONE({
        attributes: [ 'id','name', 'comment' ],
        where: {id: req.query.id}
    })
    .then((result) => {
        console.log( "result : ", result );
        res.send( { result: result[0]});
        // res.send( { result: result});
    })
}

exports.patch_comment = (req,res) => {
    // update visitor set name=req.body.name, comment=req.body.comment where id=req.body.id;
    var data = {
        name: req.body.name,
        comment: req.body.comment
    }
    Visitor.update(data, {
        where: {id: req.body.id}
    }).then((result)=>{
        console.log(result);
        res.send("수정 성공");
    })
}

exports.delete_comment = (req,res) => {
    Visitor.destroy({where: {id: req.body.id}})
    .then((result) => {
        console.log( result );
        res.send( "삭제 성공" );

    });
}