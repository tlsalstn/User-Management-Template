'use strict'

const colors = require('colors');
const models = require('../../models');
const crypto = require('crypto');

exports.getUsers = async (req, res) => {
    console.log(colors.green('[GET] Get Users'));

    console.log(colors.white('Body: '));
    console.log(colors.white(req.body));
    console.log(colors.white('Query: '));
    console.log(colors.white(req.query));

    var msg = "";
    var result = {};

    try {
        const users = await models.user.getUsers();

        msg = "유저 조회 성공";

        console.log(colors.green('Success: ' + msg));

        result = {
            status: 200,
            message: msg,
            users
        };

        res.status(200).json(result);
    } catch (error) {
        msg = "서버 에러";

        console.log(colors.red('ServerError: ' + error));

        result = {
            status: 500,
            message: msg
        };

        res.status(500).json(result);
    };
};

exports.register = async (req, res) => {
    console.log(colors.yellow('[POST] Register'));

    const { body } = req;

    console.log(colors.white('Body: '));
    console.log(colors.white(req.body));
    console.log(colors.white('Query: '));
    console.log(colors.white(req.query));

    var msg = "";
    var result = {};

    if (!body.id) {
        msg = "id가 없습니다.";

        console.log(colors.magenta('Error: ' + msg));

        result = {
            status: 400,
            message: msg
        };

        res.status(400).json(result);
    } else if (!body.password) {
        msg = "password가 없습니다.";

        console.log(colors.magenta('Error: ' + msg));

        result = {
            status: 400,
            message: msg
        };

        res.status(400).json(result);
    } else if (!body.name) {
        msg = "name이 없습니다.";

        console.log(colors.magenta('Error: ' + msg));

        result = {
            status: 400,
            message: msg
        };

        res.status(400).json(result);
    } else if (!body.email) {
        msg = "email이 없습니다.";

        console.log(colors.magenta('Error: ' + msg));

        result = {
            status: 400,
            message: msg
        };

        res.status(400).json(result);
    } else {
        try {
            const checkOverlapId = await models.user.checkOverlapId(body.id);

            if (!checkOverlapId) {
                try {
                    const shasum = crypto.createHash('sha512');
                    shasum.update(body.password);
                    body.password = shasum.digest('hex');

                    await models.user.register(body);

                    msg = "회원가입 성공";

                    console.log(colors.green('Success: ' + msg));

                    result = {
                        status: 200,
                        message: msg
                    };

                    res.status(200).json(result);
                } catch (error) {
                    msg = "서버 에러";

                    console.log(colors.red('ServerError: ' + error));

                    result = {
                        status: 500,
                        message: msg
                    };

                    res.status(500).json(result);
                };
            } else {
                msg = "중복된 아이디";

                console.log(colors.magenta('Error: ' + msg));

                result = {
                    status: 409,
                    message: msg
                };

                res.status(409).json(result);
            }
        } catch (error) {
            msg = "서버 에러";

            console.log(colors.red('ServerError: ' + error));

            result = {
                status: 500,
                message: msg
            };

            res.status(500).json(result);
        };
    };
};