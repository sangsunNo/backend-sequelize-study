const { User } = require("../model")

exports.home = (req, res) => {
    res.render("home");
}

exports.new_user = (req, res) => {
    res.render("new_user");
}

exports.user = (req, res) => {
    res.render("user", {data: req.data});
}

exports.register_user = (req, res) => { 
    // 동일한 id 확인
    User.findAll({
        attributes: ['id'],
        where: {id: req.body.id}
    })
    .then((result) => {
        if (result.length == 0){
            User.create(req.body);
            res.send({result: 0});
        }else{
            res.send({result: 1});
        }
    })
}

exports.login = (req, res) => { 
    User.findAll({
        where: {
            id: req.body.id,
            pw: req.body.pw
        }
    })
    .then((result) => {
        if (result.length == 0){
            res.send({result: 1});
        }else{
            res.send(result);
        }
    })
}

exports.get_user_info = (req, res) => {
    User.findAll({
        where: {
            id: req.body.id
        }
    })
    .then((result) => {
        res.send(result)
    })
}

exports.user_mod = (req, res) => {
    // 중복 확인
    User.findAll({
        attributes: ['id'],
        where: {id: req.body.id}
    })
    .then((result) => {
        if (result[0] != undefined){
            res.send({result: 0})
        }else{
            var data = {};
            for ( var i in req.body){
                if (i == 'u_id'){
                    continue
                }
                if(req.body[i] != ''){
                    data[i] = req.body[i];
                }
            }
            User.update(data, {
                where: {id: req.body.u_id}
            })
            .then((result) => {
                res.send(req.body);
            })
        }
    })



}

exports.user_del = (req, res) => {
    console.log('del', req.body)
    User.destroy({where: {id: req.body.id}})
    .then((result) => {
        res.send({result: result});
    })
}