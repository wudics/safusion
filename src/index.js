import $ from 'jquery';
import Swal from 'sweetalert2';

// 11x16
let fusionTable = [
	[ 989, 990, 991, 992, 989, 992, 989, 990, 990, 990, 991, 991, 991, 992, 989, 992],
	[1001,1002,1003,1004,1001,1001,1004,1001,1002,1002,1003,1003,1003,1004,1004,1003],
	[1005,1006,1007,1008,1005,1005,1005,1006,1006,1006,1007,1006,1007,1008,1008,1008],
	[1021,1025,1023,1024,1025,1021,1021,1022,1022,1022,1023,1023,1023,1021,1024,1024],
	[1030,1031,1032,1033,1030,1030,1030,1031,1031,1031,1032,1031,1032,1030,1033,1033],
	[1017,1018,1019,1020,1018,1017,1017,1018,1019,1018,1019,1019,1020,1017,1020,1020],
	[1009,1010,1011,1012,1010,1009,1009,1010,1010,1010,1011,1011,1011,1012,1012,1011],
	[ 993, 994, 995, 996, 994, 993, 993, 994, 995, 994, 995, 993, 996, 993, 996, 996],
	[1026,1027,1028,1029,1026,1026,1026,1026,1028,1027,1028,1028,1029,1029,1029,1029],
	[ 997, 998, 999, 999,1000, 997, 997,1000, 998, 998,1000, 998, 999, 999, 999, 999],
	[1013,1014,1015,1016,1013,1013,1016,1013,1015,1014,1015,1015,1015,1016,1016,1016]
];

// 29x29
let petTable = [
    //0           4              9             14             19             24
	[ 1, 2, 5, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 5, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5],
	[ 2, 5, 1, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1],
	[ 5, 1, 2, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2],
	[ 1, 2, 5, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5],
	[ 2, 5, 1, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1],

	[ 2, 1, 2, 1, 2, 2, 2, 5, 5, 1, 2, 5, 2, 1, 2, 1, 2, 5, 2, 1, 2, 1, 2, 5, 2, 5, 2, 1, 2],
	[ 1, 2, 5, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 1],
	[ 2, 5, 1, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 2],
	[10, 3,10, 3,10, 8,10, 8,10, 3,10, 3,10, 8,10, 8,10, 3,10, 3,10, 8,10, 8,10, 8,10, 3,10],
	[ 3, 8, 3, 8, 3,10, 3,10, 8, 3, 3, 8, 3, 8, 3,10, 3,10, 3, 8, 3, 8, 3,10, 3,10, 3, 8, 3],

	[ 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8],
	[ 5, 1, 5, 1, 5, 2, 5, 2, 5, 1, 5, 5, 5, 1, 5, 2, 5, 2, 5, 1, 5, 1, 5, 2, 5, 2, 5, 1, 5],
	[ 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10],
	[10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3],
	[ 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8],

	[ 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1],
	[ 9, 0, 9, 0, 9, 4, 9, 4, 9, 0, 9, 0, 9, 4, 9, 4, 9, 0, 9, 0, 9, 4, 9, 4, 9, 0, 9, 4, 9],
	[ 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2],
	[ 6, 0, 6, 0, 6, 9, 6, 9, 6, 0, 6, 0, 6, 9, 6, 9, 6, 0, 6, 0, 6, 9, 6, 9, 6, 0, 6, 9, 6],
	[ 4, 6, 4, 6, 4, 9, 4, 9, 4, 6, 4, 6, 4, 9, 4, 9, 4, 6, 4, 6, 4, 9, 4, 9, 4, 6, 4, 9, 4],

	[ 8, 3, 8, 3, 8,10, 8,10, 8, 3, 8, 3, 8,10, 8,10, 8, 3, 8, 3, 8,10, 8,10, 8, 3, 8,10, 8],
	[ 8,10, 3, 8,10, 3, 8,10,10, 3, 8,10, 3, 8,10, 3,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10],
	[ 1, 2, 5, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5],
	[ 0, 4, 0, 4, 0, 6, 0, 6, 0, 4, 0, 4, 0, 6, 0, 6, 0, 4, 0, 4, 0, 6, 0, 4, 0, 6, 0, 4, 0],
	[ 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2],

	[ 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8],
	[10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3, 8,10, 3],
	[ 2, 1, 2, 1, 5, 1, 5, 1, 2, 1, 2, 1, 5, 1, 5, 1, 2, 1, 2, 1, 5, 1, 5, 1, 2, 1, 2, 5, 1],
	[ 6, 9, 6, 9, 6, 0, 6, 0, 6, 9, 6, 9, 6, 0, 6, 0, 6, 9, 6, 9, 6, 0, 6, 0, 6, 9, 6, 0, 6]
];

// 4x4
let propertyTable = [
	[ 0, 4, 5, 6],
	[ 7, 1, 8, 9],
	[10,11, 2,12],
	[13,14,15, 3]
];

let petData = [];
let petDataById = {};
let petDataByRace = {};
let petDataByName = {};

let raceData = [];
let raceDataByRace = {};

let fusionPet = [];
let fusionPetById = {};

let fusionRace = [];
let fusionRaceByRace = {};

let fusionTableByKey = {};
let petTableByKey = {};
let propertyTableByKey = {};

let defwork = 50;
let defwork2 = 50;
let defbase = 150;
let defbase2 = 165;
let deftran = 150;
let itemtype = 125;
let itemmax = 6000;

let blankimg = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
let greenimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
let blueimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkePF/LQAFbQKWgJJXLAAAAABJRU5ErkJggg==";
let redimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BwEQAE1wHSmJUcUAAAAABJRU5ErkJggg==";
let yellowimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89J/hHAAHXQKxqlKW+wAAAABJRU5ErkJggg==";

// INI文件解析
function parseINI(data) {
    const result = {};
    let currentSection = null;

    data.split(/\r?\n/).forEach(line => {
        line = line.trim();
        if (!line || line.startsWith(';')) return; // 跳过空行和注释

        // 匹配节（如 [section]）
        const sectionMatch = line.match(/^\[(.+)\]$/);
        if (sectionMatch) {
            currentSection = sectionMatch[1];
            result[currentSection] = {};
            return;
        }

        // 匹配键值对（如 key=value）
        const keyValueMatch = line.match(/^(.+?)=(.*)$/);
        if (keyValueMatch && currentSection) {
            const key = keyValueMatch[1].trim();
            const value = keyValueMatch[2].trim();
            result[currentSection][key] = value;
        }
    });

    return result;
}

// 随机整数生成，含min和max
function randInt(min, max) {
  [min, max] = [Math.min(min, max), Math.max(min, max)];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcRank(v, s, t, d) {
    let work = v + s + t + d;
    let ranktbl = [130, 100, 95, 85, 80, 0];
    let rank = 0;
    for (let i = 0; i < 6; i++) {
        if (work >= ranktbl[i]) {
            rank = i;
            break;
        }
    }
    return rank;
}

function pred140(v, s, t, d, initnum) {

    let rankrandtbl = [
        { min: 450, max: 500 },
		{ min: 470, max: 520 },
		{ min: 490, max: 540 },
		{ min: 510, max: 560 },
		{ min: 530, max: 580 },
		{ min: 550, max: 600 }
    ];

    let rank = calcRank(v, s, t, d);

    // 初始化LV1，在base上随机+10点，并乘以initnum
    let point = [v, s, t, d];
    for (let i = 0; i < 10; i++) {
        let r = randInt(0, 3);
        point[r] = point[r] + 1.0;
    }
    for (let i = 0; i < 4; i++) {
        point[i] = point[i] * initnum;
    }
    let point_lv1 = [point[0], point[1], point[2], point[3]];
    
    // 升级到140级，累加point
    for (let lv = 1; lv < 140; lv++) {

        let work = [];
        work[0] = v;
        work[1] = s;
        work[2] = t;
        work[3] = d;

        for (let i = 0; i < 10; i++) {
            let r = randInt(0, 3);
            work[r] = work[r] + 1.0;
        }
        let fRand = randInt(rankrandtbl[rank].min, rankrandtbl[rank].max) * 0.01;

        point[0] = point[0] + parseInt(work[0] * fRand);
        point[1] = point[1] + parseInt(work[1] * fRand);
        point[2] = point[2] + parseInt(work[2] * fRand);
        point[3] = point[3] + parseInt(work[3] * fRand);
    }

    let num = [];
    num[0] = parseInt((point[0] * 4 + point[1] + point[2] + point[3]) / 100);
    num[1] = parseInt((point[0] * 0.1 + point[1] + point[2] * 0.1 + point[3] * 0.05) / 100);
    num[2] = parseInt((point[0] * 0.1 + point[1] * 0.1 + point[2] + point[3] * 0.05) / 100);
    num[3] = parseInt(point[3] / 100);

    let num_lv1 = [];
    num_lv1[0] = parseInt((point_lv1[0] * 4 + point_lv1[1] + point_lv1[2] + point_lv1[3]) / 100);
    num_lv1[1] = parseInt((point_lv1[0] * 0.1 + point_lv1[1] + point_lv1[2] * 0.1 + point_lv1[3] * 0.05) / 100);
    num_lv1[2] = parseInt((point_lv1[0] * 0.1 + point_lv1[1] * 0.1 + point_lv1[2] + point_lv1[3] * 0.05) / 100);
    num_lv1[3] = parseInt(point_lv1[3] / 100);

    let rate = [];
    rate[0] = parseInt((num[1] - num_lv1[1]) / 139 * 100);
    rate[1] = parseInt((num[2] - num_lv1[2]) / 139 * 100);
    rate[2] = parseInt((num[3] - num_lv1[3]) / 139 * 100);

    num[4] = (rate[0] + rate[1] + rate[2]) / 100;
    // console.log(num);
    num[5] = parseInt(num[0] / 4 + num[1] + num[2] + num[3]);

    return num;
}

// 界面属性初始化
function initshow_prop(target, pet) {
    let p_div = {};
    p_div[1] = target + "_prop_p1";
    p_div[2] = target + "_prop_p2";
    p_div[3] = target + "_prop_p3";
    p_div[4] = target + "_prop_p4";
    $("#" + p_div[1]).html("地：");
    $("#" + p_div[2]).html("水：");
    $("#" + p_div[3]).html("火：");
    $("#" + p_div[4]).html("风：");

    if (!pet) return;

    let p = {};
    p[1] = parseInt(pet.p1 / 10);
    p[2] = parseInt(pet.p2 / 10);
    p[3] = parseInt(pet.p3 / 10);
    p[4] = parseInt(pet.p4 / 10);

    let p_color = {};
    p_color[1] = greenimg;
    p_color[2] = blueimg;
    p_color[3] = redimg;
    p_color[4] = yellowimg;

    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < p[i]; j++) {
            $("#" + p_div[i]).append(`<img src="${p_color[i]}">`);
        }
    }
}

function initshow_4v(target) {
    let div_v = target +"_point_v_input";
    let div_s = target +"_point_s_input";
    let div_t = target +"_point_t_input";
    let div_d = target +"_point_d_input";

    $("#" + div_v).val("0");
    $("#" + div_s).val("0");
    $("#" + div_t).val("0");
    $("#" + div_d).val("0");
}

function initshow_mm(target) {
    let input_v_mm = target + "_mm_input_v";
    let input_s_mm = target + "_mm_input_s";
    let input_t_mm = target + "_mm_input_t";
    let input_d_mm = target + "_mm_input_d";
    $("#" + input_v_mm).val("0");
    $("#" + input_s_mm).val("0");
    $("#" + input_t_mm).val("0");
    $("#" + input_d_mm).val("0");

    let label_deltas = []
    label_deltas[0] = target + "_point_v_label";
    label_deltas[1] = target + "_point_s_label";
    label_deltas[2] = target + "_point_t_label";
    label_deltas[3] = target + "_point_d_label";
    for (let i = 0; i < 4; i++) {
        $("#" + label_deltas[i]).html("0");
        $("#" + label_deltas[i]).removeClass("point_label_red");
        $("#" + label_deltas[i]).removeClass("point_label_green");
    }
}

function mmtrans(target, workmm) {
    let input_v_pet = target +"_point_v_input";
    let input_s_pet = target +"_point_s_input";
    let input_t_pet = target +"_point_t_input";
    let input_d_pet = target +"_point_d_input";

    let v_pet = parseInt($("#" + input_v_pet).val());
    let s_pet = parseInt($("#" + input_s_pet).val());
    let t_pet = parseInt($("#" + input_t_pet).val());
    let d_pet = parseInt($("#" + input_d_pet).val());

    let workpet = [v_pet, s_pet, t_pet, d_pet];

    let input_v_mm = target + "_mm_input_v";
    let input_s_mm = target + "_mm_input_s";
    let input_t_mm = target + "_mm_input_t";
    let input_d_mm = target + "_mm_input_d";

    if (!workmm) {
        // 自定义：从input获取workmm数值
        let v_mm = parseInt($("#" + input_v_mm).val());
        let s_mm = parseInt($("#" + input_s_mm).val());
        let t_mm = parseInt($("#" + input_t_mm).val());
        let d_mm = parseInt($("#" + input_d_mm).val());
        workmm = [v_mm, s_mm, t_mm, d_mm];
    } else {
        // 预置：把workmm数值写入mm_input
        $("#" + input_v_mm).val(workmm[0]);
        $("#" + input_s_mm).val(workmm[1]);
        $("#" + input_t_mm).val(workmm[2]);
        $("#" + input_d_mm).val(workmm[3]);
    }

    if (workmm[0] > 50 || workmm[1] > 50 || workmm[2] > 50 || workmm[3] > 50) {
        Swal.fire({
            title: "错误",
            html: "MM喂石单项最高为50",
            icon: "error",
            confirmButtonText: '关闭'
        });
        return;
    }

    // 计算转生档
    let total1 = workmm[0] + workmm[1] + workmm[2] + workmm[3];
    if (total1 > deftran) total1 = deftran;
    if (total1 < 0) total1 = 0;
    
    let total2 = workpet[0] + workpet[1] + workpet[2] + workpet[3];
    let rank_pet = calcRank(workpet[0], workpet[1], workpet[2], workpet[3]);

    // 计算转生档：计算ans值
    let lv_pet = 130;
    let lv_trans = 100;
    let fx = 1;
    let total = 0;
    let ans = 0;

    if (lv_pet > 130) lv = 130;
    total = total1 / 100;
    total = total * total * total * total * total;
    if (total < 1) {
        total = 0;
    } else {
        total = total * 1.3;
    }   // 0≤total≤41.6
    fx = parseInt((5 - rank_pet) * 1.2 + 5);    // rank_pet: [0,6] 所以 fx: [4,11]

    ans = parseInt(total + total2 + (lv_pet - lv_trans) / fx);
    if (ans > deftran) ans = deftran;

    // 计算转生档：计算转生work
    let work = [];
    let ansbase = total1 + total2 * 4;
    work[0] = parseInt((workmm[0] + workpet[0] * 4) * ans / ansbase);   // v
    work[1] = parseInt((workmm[1] + workpet[1] * 4) * ans / ansbase);   // s
    work[2] = parseInt((workmm[2] + workpet[2] * 4) * ans / ansbase);   // t
    work[3] = parseInt((workmm[3] + workpet[3] * 4) * ans / ansbase);   // d

    // 计算转生档：随机±2
    for (let i = 0; i < 4; i++) {
        work[i] = work[i] + randInt(0, 4) - 2;
    }
    // 全部+2
    // for (let i = 0; i < 4; i++) {
    //     work[i] = work[i] + 2;
    // }

    // 显示转生档差值
    let delta = [];
    delta[0] = work[0] - workpet[0];
    delta[1] = work[1] - workpet[1];
    delta[2] = work[2] - workpet[2];
    delta[3] = work[3] - workpet[3];

    let label_deltas = []
    label_deltas[0] = target + "_point_v_label";
    label_deltas[1] = target + "_point_s_label";
    label_deltas[2] = target + "_point_t_label";
    label_deltas[3] = target + "_point_d_label";

    // 不转：忽略计算结果，置0值
    if (workmm[0] == 0 && workmm[1] == 0 && workmm[2] == 0 && workmm[3] == 0) {
        delta[0] = 0;
        delta[1] = 0;
        delta[2] = 0;
        delta[3] = 0;
    }

    for (let i = 0; i < 4; i++) {
        if (delta[i] > 0) {
            $("#" + label_deltas[i]).removeClass("point_label_red");
            $("#" + label_deltas[i]).addClass("point_label_green");
        } else if (delta[i] < 0) {
            $("#" + label_deltas[i]).removeClass("point_label_green");
            $("#" + label_deltas[i]).addClass("point_label_red");
        } else {
            $("#" + label_deltas[i]).removeClass("point_label_red");
            $("#" + label_deltas[i]).removeClass("point_label_green");
        }

        $("#" + label_deltas[i]).html(delta[i]);
    }

    // 触发预测点击事件
    $("#" + target + "_pred_btn").trigger("click");
}

// 界面初始化
function initshow() {

    // 初始化主体界面 main
    $("#main_race_select").empty();
    $("#main_img_show").attr("src", blankimg);
    initshow_4v("main");
    initshow_prop("main", null);
    initshow_mm("main");
    $("#main_race_select").append(`<option value="-1" selected>请选择种族</option>`);
    for (const race of raceData) {
        $("#main_race_select").append(`<option value="${race.race}">${race.name}</option>`);
    }
    $("#main_race_select").on("change", function() {
        $("#main_pet_select").empty();
        $("#main_img_show").attr("src", blankimg);
        initshow_4v("main");
        initshow_prop("main", null);
        initshow_mm("main");
        let race = $(this).val();
        if (race == -1) return;
        $("#main_pet_select").append(`<option value="-1" selected>请选择宠物</option>`);
        for (const pet of petDataByRace[race]) {
            $("#main_pet_select").append(`<option value="${pet.id}">${pet.name}</option>`);
        }
    });

    $("#main_pet_select").on("change", function() {
        let id = $(this).val();
        $("#main_img_show").attr("src", blankimg);
        initshow_4v("main");
        initshow_prop("main", null);
        initshow_mm("main");
        if (id == -1) return;
        let pet = petDataById[id];
        $("#main_img_show").attr("src", `data/img/${pet.img}.gif`);

        $("#main_point_v_input").val(pet.v);
        $("#main_point_s_input").val(pet.s);
        $("#main_point_t_input").val(pet.t);
        $("#main_point_d_input").val(pet.d);

        initshow_prop("main", pet);
    });

    $("#main_mm_btn_bz").on("click", function() {
        // console.log("main不转");
        mmtrans("main", [0, 0, 0, 0]);
    });

    $("#main_mm_btn_ms").on("click", function() {
        // console.log("main满石");
        mmtrans("main", [50, 50, 50, 50]);
    });

    $("#main_mm_btn_dg").on("click", function() {
        // console.log("main单攻");
        mmtrans("main", [0, 50, 0, 0]);
    });

    $("#main_mm_btn_gm").on("click", function() {
        // console.log("main攻敏");
        mmtrans("main", [0, 50, 0, 50]);
    });

    $("#main_mm_btn_diy").on("click", function() {
        // console.log("main自定义");
        mmtrans("main", null);
    });

    $("#main_pred_btn").on("click", function() {
        let main_id = $("#main_pet_select").val();
        if (main_id == -1) return;
        let main_pet = petDataById[main_id];
        let main_initnum = main_pet.initnum;

        let main_v = parseInt($("#main_point_v_input").val());
        let main_s = parseInt($("#main_point_s_input").val());
        let main_t = parseInt($("#main_point_t_input").val());
        let main_d = parseInt($("#main_point_d_input").val());

        main_v = main_v + parseInt($("#main_point_v_label").html());
        main_s = main_s + parseInt($("#main_point_s_label").html());
        main_t = main_t + parseInt($("#main_point_t_label").html());
        main_d = main_d + parseInt($("#main_point_d_label").html());

        // console.log(main_v, main_s, main_t, main_d, main_initnum);
        let res = pred140(main_v, main_s, main_t, main_d, main_initnum);
        $("#main_pred_hp_label").html(res[0]);
        $("#main_pred_gj_label").html(res[1]);
        $("#main_pred_fy_label").html(res[2]);
        $("#main_pred_mj_label").html(res[3]);
    });

    // 初始化客体1界面 sub1
    $("#sub1_race_select").empty();
    $("#sub1_img_show").attr("src", blankimg);
    initshow_4v("sub1");
    initshow_prop("sub1", null);
    initshow_mm("sub1");
    $("#sub1_race_select").append(`<option value="-1" selected>请选择种族</option>`);
    for (const race of raceData) {
        $("#sub1_race_select").append(`<option value="${race.race}">${race.name}</option>`);
    }
    $("#sub1_race_select").on("change", function() {
        $("#sub1_pet_select").empty();
        $("#sub1_img_show").attr("src", blankimg);
        initshow_4v("sub1");
        initshow_prop("sub1", null);
        initshow_mm("sub1");
        let race = $(this).val();
        if (race == -1) return;
        $("#sub1_pet_select").append(`<option value="-1" selected>请选择宠物</option>`);
        for (const pet of petDataByRace[race]) {
            $("#sub1_pet_select").append(`<option value="${pet.id}">${pet.name}</option>`);
        }
    });

    $("#sub1_pet_select").on("change", function() {
        let id = $(this).val();
        $("#sub1_img_show").attr("src", blankimg);
        initshow_4v("sub1");
        initshow_prop("sub1", null);
        initshow_mm("sub1");
        if (id == -1) return;
        let pet = petDataById[id];
        $("#sub1_img_show").attr("src", `data/img/${pet.img}.gif`);

        $("#sub1_point_v_input").val(pet.v);
        $("#sub1_point_s_input").val(pet.s);
        $("#sub1_point_t_input").val(pet.t);
        $("#sub1_point_d_input").val(pet.d);

        initshow_prop("sub1", pet);
    });

    $("#sub1_mm_btn_bz").on("click", function() {
        // console.log("sub1不转");
        mmtrans("sub1", [0, 0, 0, 0]);
    });

    $("#sub1_mm_btn_ms").on("click", function() {
        // console.log("sub1满石");
        mmtrans("sub1", [50, 50, 50, 50]);
    });

    $("#sub1_mm_btn_dg").on("click", function() {
        // console.log("sub1单攻");
        mmtrans("sub1", [0, 50, 0, 0]);
    });

    $("#sub1_mm_btn_gm").on("click", function() {
        // console.log("sub1攻敏");
        mmtrans("sub1", [0, 50, 0, 50]);
    });

    $("#sub1_mm_btn_diy").on("click", function() {
        // console.log("sub1自定义");
        mmtrans("sub1", null);
    });

    $("#sub1_pred_btn").on("click", function() {
        let sub1_id = $("#sub1_pet_select").val();
        if (sub1_id == -1) return;
        let sub1_pet = petDataById[sub1_id];
        let sub1_initnum = sub1_pet.initnum;

        let sub1_v = parseInt($("#sub1_point_v_input").val());
        let sub1_s = parseInt($("#sub1_point_s_input").val());
        let sub1_t = parseInt($("#sub1_point_t_input").val());
        let sub1_d = parseInt($("#sub1_point_d_input").val());

        sub1_v = sub1_v + parseInt($("#sub1_point_v_label").html());
        sub1_s = sub1_s + parseInt($("#sub1_point_s_label").html());
        sub1_t = sub1_t + parseInt($("#sub1_point_t_label").html());
        sub1_d = sub1_d + parseInt($("#sub1_point_d_label").html());

        // console.log(sub1_v, sub1_s, sub1_t, sub1_d, sub1_initnum);
        let res = pred140(sub1_v, sub1_s, sub1_t, sub1_d, sub1_initnum);
        $("#sub1_pred_hp_label").html(res[0]);
        $("#sub1_pred_gj_label").html(res[1]);
        $("#sub1_pred_fy_label").html(res[2]);
        $("#sub1_pred_mj_label").html(res[3]);
    });

    // 初始化客体2界面 sub2
    $("#sub2_race_select").empty();
    $("#sub2_img_show").attr("src", blankimg);
    initshow_4v("sub2");
    initshow_prop("sub2", null);
    initshow_mm("sub2");
    $("#sub2_race_select").append(`<option value="-1" selected>请选择种族</option>`);
    for (const race of raceData) {
        $("#sub2_race_select").append(`<option value="${race.race}">${race.name}</option>`);
    }
    $("#sub2_race_select").on("change", function() {
        $("#sub2_pet_select").empty();
        $("#sub2_img_show").attr("src", blankimg);
        initshow_4v("sub2");
        initshow_prop("sub2", null);
        initshow_mm("sub2");
        let race = $(this).val();
        if (race == -1) return;
        $("#sub2_pet_select").append(`<option value="-1" selected>请选择宠物</option>`);
        for (const pet of petDataByRace[race]) {
            $("#sub2_pet_select").append(`<option value="${pet.id}">${pet.name}</option>`);
        }
    });

    $("#sub2_pet_select").on("change", function() {
        let id = $(this).val();
        $("#sub2_img_show").attr("src", blankimg);
        initshow_4v("sub2");
        initshow_prop("sub2", null);
        initshow_mm("sub2");
        if (id == -1) return;
        let pet = petDataById[id];
        $("#sub2_img_show").attr("src", `data/img/${pet.img}.gif`);

        $("#sub2_point_v_input").val(pet.v);
        $("#sub2_point_s_input").val(pet.s);
        $("#sub2_point_t_input").val(pet.t);
        $("#sub2_point_d_input").val(pet.d);

        initshow_prop("sub2", pet);
    });

    $("#sub2_mm_btn_bz").on("click", function() {
        // console.log("sub2不转");
        mmtrans("sub2", [0, 0, 0, 0]);
    });

    $("#sub2_mm_btn_ms").on("click", function() {
        // console.log("sub2满石");
        mmtrans("sub2", [50, 50, 50, 50]);
    });

    $("#sub2_mm_btn_dg").on("click", function() {
        // console.log("sub2单攻");
        mmtrans("sub2", [0, 50, 0, 0]);
    });

    $("#sub2_mm_btn_gm").on("click", function() {
        // console.log("sub2攻敏");
        mmtrans("sub2", [0, 50, 0, 50]);
    });

    $("#sub2_mm_btn_diy").on("click", function() {
        // console.log("sub2自定义");
        mmtrans("sub2", null);
    });

    $("#sub2_pred_btn").on("click", function() {
        let sub2_id = $("#sub2_pet_select").val();
        if (sub2_id == -1) return;
        let sub2_pet = petDataById[sub2_id];
        let sub2_initnum = sub2_pet.initnum;

        let sub2_v = parseInt($("#sub2_point_v_input").val());
        let sub2_s = parseInt($("#sub2_point_s_input").val());
        let sub2_t = parseInt($("#sub2_point_t_input").val());
        let sub2_d = parseInt($("#sub2_point_d_input").val());

        sub2_v = sub2_v + parseInt($("#sub2_point_v_label").html());
        sub2_s = sub2_s + parseInt($("#sub2_point_s_label").html());
        sub2_t = sub2_t + parseInt($("#sub2_point_t_label").html());
        sub2_d = sub2_d + parseInt($("#sub2_point_d_label").html());

        // console.log(sub2_v, sub2_s, sub2_t, sub2_d, sub2_initnum);
        let res = pred140(sub2_v, sub2_s, sub2_t, sub2_d, sub2_initnum);
        $("#sub2_pred_hp_label").html(res[0]);
        $("#sub2_pred_gj_label").html(res[1]);
        $("#sub2_pred_fy_label").html(res[2]);
        $("#sub2_pred_mj_label").html(res[3]);
    });

    // 初始化融合界面 res
    $("#res_race_select").empty();
    $("#res_img_show").attr("src", blankimg);
    initshow_4v("res");
    initshow_prop("res", null);
    $("#res_race_select").append(`<option value="-1" selected>请选择种族</option>`);
    for (const race of fusionRace) {
        $("#res_race_select").append(`<option value="${race.race}">${race.name}</option>`);
    }

    $("#res_race_select").on("change", function() {
        $("#res_pet_select").empty();
        $("#res_img_show").attr("src", blankimg);
        initshow_4v("res");
        initshow_prop("res", null);
        let race = $(this).val();
        if (race == -1) return;
        $("#res_pet_select").append(`<option value="-1" selected>请选择宠物</option>`);
        for (const pet of petDataByRace[race]) {
            $("#res_pet_select").append(`<option value="${pet.id}">${pet.name}</option>`);
        }
    });

    $("#res_pet_select").on("change", function() {
        let id = $(this).val();
        $("#res_img_show").attr("src", blankimg);
        initshow_4v("res");
        initshow_prop("res", null);
        if (id == -1) return;
        let pet = petDataById[id];
        $("#res_img_show").attr("src", `data/img/${pet.img}.gif`);

        $("#res_point_v_input").val(pet.v);
        $("#res_point_s_input").val(pet.s);
        $("#res_point_t_input").val(pet.t);
        $("#res_point_d_input").val(pet.d);

        initshow_prop("res", pet);
    });

    $("#res_pred_total_label").html(defbase);
}

function getMainProp(p1, p2, p3, p4) {
    if (p1 > 0) {
        return 0;
    }

    if (p2 > 0) {
        return 1;
    }

    if (p3 > 0) {
        return 2;
    }

    if (p4 > 0) {
        return 3;
    }

    return -1;
}

// 融合
function dofusion() {

    let flg = 1;

    let main_id = parseInt($("#main_pet_select").val());
    let sub1_id = parseInt($("#sub1_pet_select").val());
    let sub2_id = parseInt($("#sub2_pet_select").val());

    if (sub2_id > -1) flg = 2;

    let main_info = {};
    let sub1_info = {};
    let sub2_info = {};

    main_info["id"] = main_id;
    main_info["v"] = parseInt($("#main_point_v_input").val()) + parseInt($("#main_point_v_label").html());
    main_info["s"] = parseInt($("#main_point_s_input").val()) + parseInt($("#main_point_s_label").html());
    main_info["t"] = parseInt($("#main_point_t_input").val()) + parseInt($("#main_point_t_label").html());
    main_info["d"] = parseInt($("#main_point_d_input").val()) + parseInt($("#main_point_d_label").html());
    main_info["race"] = petDataById[main_id].race;
    main_info["p"] = getMainProp(petDataById[main_id].p1, petDataById[main_id].p2, petDataById[main_id].p3, petDataById[main_id].p4);
    main_info["lv"] = parseInt($('input[name="main_level_radio"]:checked').val());

    sub1_info["id"] = sub1_id;
    sub1_info["v"] = parseInt($("#sub1_point_v_input").val()) + parseInt($("#sub1_point_v_label").html());
    sub1_info["s"] = parseInt($("#sub1_point_s_input").val()) + parseInt($("#sub1_point_s_label").html());
    sub1_info["t"] = parseInt($("#sub1_point_t_input").val()) + parseInt($("#sub1_point_t_label").html());
    sub1_info["d"] = parseInt($("#sub1_point_d_input").val()) + parseInt($("#sub1_point_d_label").html());
    sub1_info["race"] = petDataById[sub1_id].race;
    sub1_info["p"] = getMainProp(petDataById[sub1_id].p1, petDataById[sub1_id].p2, petDataById[sub1_id].p3, petDataById[sub1_id].p4);
    sub1_info["lv"] = parseInt($('input[name="sub1_level_radio"]:checked').val());

    let tbl_x = petTable[sub1_info["race"]][main_info["race"]];
    let tbl_y = propertyTable[main_info["p"]][sub1_info["p"]];

    let fusionpetid = fusionTable[tbl_x][tbl_y];
    let fusionpet = petDataById[fusionpetid];

    $("#res_race_select").val(fusionpet.race).trigger("change");
    $("#res_pet_select").val(fusionpetid).trigger("change");
    $("#res_img_show").attr("src", `data/img/${fusionpet.img}.gif`);

    if (flg == 2) {
        sub2_info["id"] = sub2_id;
        sub2_info["v"] = parseInt($("#sub2_point_v_input").val()) + parseInt($("#sub2_point_v_label").html());
        sub2_info["s"] = parseInt($("#sub2_point_s_input").val()) + parseInt($("#sub2_point_s_label").html());
        sub2_info["t"] = parseInt($("#sub2_point_t_input").val()) + parseInt($("#sub2_point_t_label").html());
        sub2_info["d"] = parseInt($("#sub2_point_d_input").val()) + parseInt($("#sub2_point_d_label").html());
        sub2_info["lv"] = parseInt($('input[name="sub2_level_radio"]:checked').val());
    }

    // console.log(main_info);
    // console.log(sub1_info);
    // console.log(sub2_info);

    let work = [0, 0, 0, 0];        // 融合work
    let work_main = [0, 0, 0, 0];
    let work_sub1 = [0, 0, 0, 0];
    let work_sub2 = [0, 0, 0, 0];

    work_main = [main_info["v"], main_info["s"], main_info["t"], main_info["d"]];
    work_sub1 = [sub1_info["v"], sub1_info["s"], sub1_info["t"], sub1_info["d"]];
    if (flg == 2) {
        work_sub2 = [sub2_info["v"], sub2_info["s"], sub2_info["t"], sub2_info["d"]];
    }

    if (main_info["lv"] == 1) {
        work_main[0] = parseInt(work_main[0] * 0.7);
        work_main[1] = parseInt(work_main[1] * 0.7);
        work_main[2] = parseInt(work_main[2] * 0.7);
        work_main[3] = parseInt(work_main[3] * 0.7);
    } else if (main_info["lv"] == 2) {
        work_main[0] = parseInt(work_main[0] * 0.8);
        work_main[1] = parseInt(work_main[1] * 0.8);
        work_main[2] = parseInt(work_main[2] * 0.8);
        work_main[3] = parseInt(work_main[3] * 0.8);
    }

    if (work_sub1["lv"] == 1) {
        work_sub1[0] = parseInt(work_sub1[0] * 0.7);
        work_sub1[1] = parseInt(work_sub1[1] * 0.7);
        work_sub1[2] = parseInt(work_sub1[2] * 0.7);
        work_sub1[3] = parseInt(work_sub1[3] * 0.7);
    } else if (work_sub1["lv"] == 2) {
        work_sub1[0] = parseInt(work_sub1[0] * 0.8);
        work_sub1[1] = parseInt(work_sub1[1] * 0.8);
        work_sub1[2] = parseInt(work_sub1[2] * 0.8);
        work_sub1[3] = parseInt(work_sub1[3] * 0.8);
    }

    if (flg == 2) {
        if (work_sub2["lv"] == 1) {
            work_sub2[0] = parseInt(work_sub2[0] * 0.7);
            work_sub2[1] = parseInt(work_sub2[1] * 0.7);
            work_sub2[2] = parseInt(work_sub2[2] * 0.7);
            work_sub2[3] = parseInt(work_sub2[3] * 0.7);
        } else if (work_sub2["lv"] == 2) {
            work_sub2[0] = parseInt(work_sub2[0] * 0.8);
            work_sub2[1] = parseInt(work_sub2[1] * 0.8);
            work_sub2[2] = parseInt(work_sub2[2] * 0.8);
            work_sub2[3] = parseInt(work_sub2[3] * 0.8);
        }
    }

    if (flg == 2) {
        work[0] = parseInt(work_main[0] * 0.6 + (work_sub1[0] + work_sub2[0]) * 0.2);
        work[1] = parseInt(work_main[1] * 0.6 + (work_sub1[1] + work_sub2[1]) * 0.2);
        work[2] = parseInt(work_main[2] * 0.6 + (work_sub1[2] + work_sub2[2]) * 0.2);
        work[3] = parseInt(work_main[3] * 0.6 + (work_sub1[3] + work_sub2[3]) * 0.2);
    } else  {
        work[0] = parseInt(work_main[0] * 0.6 + work_sub1[0] * 0.4);
        work[1] = parseInt(work_main[1] * 0.6 + work_sub1[1] * 0.4);
        work[2] = parseInt(work_main[2] * 0.6 + work_sub1[2] * 0.4);
        work[3] = parseInt(work_main[3] * 0.6 + work_sub1[3] * 0.4);
    }

    let base = [];
    base[0] = work[0] + randInt(0, 4) - 2;
    base[1] = work[1] + randInt(0, 4) - 2;
    base[2] = work[2] + randInt(0, 4) - 2;
    base[3] = work[3] + randInt(0, 4) - 2;

    let base_min = [];
    base_min[0] = work[0] - 2;
    base_min[1] = work[1] - 2;
    base_min[2] = work[2] - 2;
    base_min[3] = work[3] - 2;

    let base_max = [];
    base_max[0] = work[0] + 2;
    base_max[1] = work[1] + 2;
    base_max[2] = work[2] + 2;
    base_max[3] = work[3] + 2;

    // console.log(base);

    // 喂药
    let evol_v = parseInt($("#edit_point_v_input").val());
    let evol_s = parseInt($("#edit_point_s_input").val());
    let evol_t = parseInt($("#edit_point_t_input").val());
    let evol_d = parseInt($("#edit_point_d_input").val());
    let evol_total = evol_v + evol_s + evol_t + evol_d;
    if (evol_total > 40) {
        // alert("最多只能喂40个药");
        Swal.fire({
            title: "错误",
            html: "最多只能喂40个药",
            icon: "error",
            confirmButtonText: '关闭'
        });
        return;
    }

    let evol = [0, 0, 0, 0];
    evol[0] = evol[0] + evol_v * itemtype;
    evol[1] = evol[1] + evol_s * itemtype;
    evol[2] = evol[2] + evol_t * itemtype;
    evol[3] = evol[3] + evol_d * itemtype;

    if (evol[0] > itemmax) evol[0] = itemmax;
    if (evol[1] > itemmax) evol[1] = itemmax;
    if (evol[2] > itemmax) evol[2] = itemmax;
    if (evol[3] > itemmax) evol[3] = itemmax;

    let evol_min = [evol[0], evol[1], evol[2], evol[3]];
    let evol_max = [evol[0], evol[1], evol[2], evol[3]];

    // console.log(evol);

    // 融合 - 随机
    let res = dofusion_calc(base, evol, fusionpet.race);
    $("#res_point_v_input").val(res.base[0]);
    $("#res_point_s_input").val(res.base[1]);
    $("#res_point_t_input").val(res.base[2]);
    $("#res_point_d_input").val(res.base[3]);
    $("#calc_pred_czd_label").html(res.total);

    let pred = pred140(res.base[0], res.base[1], res.base[2], res.base[3], fusionpet.initnum);
    $("#calc_pred_hp_label").html(pred[0]);
    $("#calc_pred_gj_label").html(pred[1]);
    $("#calc_pred_fy_label").html(pred[2]);
    $("#calc_pred_mj_label").html(pred[3]);
    $("#calc_pred_czl_label").html(pred[4]);
    $("#calc_pred_pf_label").html(pred[5]);

    // 融合 - min
    let res_min = dofusion_calc(base_min, evol_min, fusionpet.race);
    $("#calc_pred_czd_label_min").html(res_min.total);

    let pred_min = pred140(res_min.base[0], res_min.base[1], res_min.base[2], res_min.base[3], fusionpet.initnum);
    $("#calc_pred_hp_label_min").html(pred_min[0]);
    $("#calc_pred_gj_label_min").html(pred_min[1]);
    $("#calc_pred_fy_label_min").html(pred_min[2]);
    $("#calc_pred_mj_label_min").html(pred_min[3]);
    $("#calc_pred_czl_label_min").html(pred_min[4]);
    $("#calc_pred_pf_label_min").html(pred_min[5]);

    // 融合 - max
    let res_max = dofusion_calc(base_max, evol_max, fusionpet.race);
    $("#calc_pred_czd_label_max").html(res_max.total);

    let pred_max = pred140(res_max.base[0], res_max.base[1], res_max.base[2], res_max.base[3], fusionpet.initnum);
    $("#calc_pred_hp_label_max").html(pred_max[0]);
    $("#calc_pred_gj_label_max").html(pred_max[1]);
    $("#calc_pred_fy_label_max").html(pred_max[2]);
    $("#calc_pred_mj_label_max").html(pred_max[3]);
    $("#calc_pred_czl_label_max").html(pred_max[4]);
    $("#calc_pred_pf_label_max").html(pred_max[5]);
}

function dofusion_calc(base, evol, race) {
    let total, total1, total2;
    let defwork_fixed = defwork;
    let defbase_fixed = defbase;
    if (race == 37) {
        // 飞机头
        defwork_fixed = defwork2;
        defbase_fixed = defbase2;
    }

    for (let i = 0; i < 4; i++) {
		evol[i] = parseInt((evol[i] * 0.7) / 100);
		if (evol[i] < 0) evol[i] = 0;
		if (evol[i] > 60) evol[i] = 60;
	}
    total1 = evol[0] + evol[1] + evol[2] + evol[3];

    for (let i = 0; i < 4; i++) {
		if (base[i] < 0) base[i] = 5;
		if (base[i] > 60) base[i] = 60;
	}
	total2 = base[0] + base[1] + base[2] + base[3];

    if (total1 > defwork_fixed) {
		for (let i = 0; i < 4; i++) {
			evol[i] = parseInt((evol[i] * defwork_fixed) / total1);
			if (evol[i] < 0) evol[i] = 0;
			if (evol[i] > 60) evol[i] = 60;
		}
	}

    total1 = evol[0] + evol[1] + evol[2] + evol[3];
	total = parseInt(total1 / 2) + total2;

    if (total > 0) {
		for (let i = 0; i < 4; i++) {
			let fixwork = 0.0;
			fixwork = base[i] + (evol[i] / 2);
			base[i] += parseInt((fixwork / total) * total1);
			if (base[i] < 1) base[i] = 1;
			if (base[i] > 60) base[i] = 60;
		}
	}

	total2 = base[0] + base[1] + base[2] + base[3];
	if (total2 > defbase_fixed) {
		for (let i = 0; i < 4; i++) {
			base[i] = parseInt((base[i] * defbase_fixed) / total2);
			if (base[i] < 1) base[i] = 1;
			if (base[i] > 60) base[i] = 60;
		}
	}
	total2 = base[0] + base[1] + base[2] + base[3];

    return {
        total: total2,
        base: base,
        evol: evol
    };
}

function dofusion_getSub1() {
    let res_id = parseInt($("#res_pet_select").val());
    let main_id = parseInt($("#main_pet_select").val());

    let mainpet = petDataById[main_id];
    let mainprop = getMainProp(mainpet.p1, mainpet.p2, mainpet.p3, mainpet.p4);

    let sub1pets = {};
    for (const k in raceDataByRace) {

        let racename = raceDataByRace[k];
        let sub1petsByRace = [];
        for (let i = 0; i < petDataByRace[k].length; i++) {
            let sub1pet = petDataByRace[k][i];
            let sub1prop = getMainProp(sub1pet.p1, sub1pet.p2, sub1pet.p3, sub1pet.p4);

            let tbl_x = petTable[sub1pet.race][mainpet.race];
            let tbl_y = propertyTable[mainprop][sub1prop];

            let fpetid = fusionTable[tbl_x][tbl_y];
            if (fpetid == res_id) {
                sub1petsByRace.push(sub1pet.name);
            }
        }
        if (sub1petsByRace.length > 0) {
            sub1pets[racename] = sub1petsByRace;
        }
    }

    let title = "【匹配的客体1】";
    let str = "";
    for (const k in sub1pets) {
        str += `----------${k}----------` + "<br/>";
        for (const name of sub1pets[k]) {
            str += `${name}` + "<br/>";
        }
    }

    if (str == "") {
        title = "无匹配的客体1";
    }

    Swal.fire({
        title: title,
        html: str,
        confirmButtonText: '关闭'
    });
}

function dofusion_getMain() {
    let res_id = parseInt($("#res_pet_select").val());
    let sub1_id = parseInt($("#sub1_pet_select").val());

    let sub1pet = petDataById[sub1_id];
    let sub1prop = getMainProp(sub1pet.p1, sub1pet.p2, sub1pet.p3, sub1pet.p4);

    let mainpets = {};
    for (const k in raceDataByRace) {

        let racename = raceDataByRace[k];
        let mainpetsByRace = [];
        for (let i = 0; i < petDataByRace[k].length; i++) {
            let mainpet = petDataByRace[k][i];
            let mainprop = getMainProp(mainpet.p1, mainpet.p2, mainpet.p3, mainpet.p4);

            let tbl_x = petTable[sub1pet.race][mainpet.race];
            let tbl_y = propertyTable[mainprop][sub1prop];

            let fpetid = fusionTable[tbl_x][tbl_y];
            if (fpetid == res_id) {
                mainpetsByRace.push(mainpet.name);
            }
        }
        if (mainpetsByRace.length > 0) {
            mainpets[racename] = mainpetsByRace;
        }
    }

    let title = "【匹配的主体】";
    let str = "";
    for (const k in mainpets) {
        str += `----------${k}----------` + "<br/>";
        for (const name of mainpets[k]) {
            str += `${name}` + "<br/>";
        }
    }

    if (str == "") {
        title = "无匹配的主体";
    }

    Swal.fire({
        title: title,
        html: str,
        confirmButtonText: '关闭'
    });
}

function dofusion_getFusionBySub1() {
    let sub1_id = parseInt($("#sub1_pet_select").val());
    let sub1pet = petDataById[sub1_id];
    let sub1prop = getMainProp(sub1pet.p1, sub1pet.p2, sub1pet.p3, sub1pet.p4);

    let race_offset = {};
    for (const race of petTable[sub1pet.race]) {
        race_offset[race] = 1;
    }

    let main_props = [
        propertyTable[0][sub1prop],
        propertyTable[1][sub1prop],
        propertyTable[2][sub1prop],
        propertyTable[3][sub1prop]
    ];

    let htmlstr = "<table style='width: 100%; text-align: left;'>";
    let title = "客体1【" + sub1pet.name + "】融合可出";
    let fpet_ids = {};
    for (const k in race_offset) {
        for (const main_prop of main_props) {

            let fpet_id = fusionTable[k][main_prop];
            // fpet_ids[fpet_id] = 1;

            // 反方向查找是否有合适的主体，有合适的才使fpet_ids[fpet_id]为1值
            let flag = 0;
            for (const fusion_xy of fusionTableByKey[fpet_id]) {
                let valpet = fusion_xy.valpet;
                let valprop = fusion_xy.valprop;

                let prop_main = propertyTableByKey[valprop].prop_main;
                let prop_sub1 = propertyTableByKey[valprop].prop_sub1;
                if (sub1prop != prop_sub1) {
                    continue;
                }

                for (const pet_xy of petTableByKey[valpet]) {
                    let race_sub1 = pet_xy.race_sub1;
                    let race_main = pet_xy.race_main;
                    if (race_sub1 != sub1pet.race) {
                        continue;
                    }

                    for (const mainpet of petDataByRace[race_main]) {
                        let mainprop = getMainProp(mainpet.p1, mainpet.p2, mainpet.p3, mainpet.p4);
                        if (mainprop != prop_main) {
                            continue;
                        }
                        fpet_ids[fpet_id] = 1;
                        flag = 1;
                        break;  // 找到合适的主体后，跳出循环
                    }
                    if (flag == 1) {
                        break;  // 找到合适的主体后，跳出循环
                    }
                }
                if (flag == 1) {
                    break;  // 找到合适的主体后，跳出循环
                }
            }
        }
    }

    for (const k in fpet_ids) {
        let fpet = petDataById[k];
        htmlstr += "<tr style='boder-bottom: 1px solid #333;'>";
        htmlstr += "<td>" + `<img src="data/img/${fpet.img}.gif">` + "</td>";
        htmlstr += "<td>[" + fusionRaceByRace[fpet.race] + "]" + fpet.name + "</td>";
        htmlstr += "<td>";
        if (fpet.p1 > 0) {
            htmlstr += "<div>地：";
            let count = parseInt(fpet.p1 / 10);
            for (let i = 0; i < count; i++) {
                htmlstr += `<img class="imgprop" src="${greenimg}" />`;
            }
            htmlstr += "</div>";
        }
        if (fpet.p2 > 0) {
            htmlstr += "<div>水：";
            let count = parseInt(fpet.p2 / 10);
            for (let i = 0; i < count; i++) {
                htmlstr += `<img class="imgprop" src="${blueimg}" />`;
            }
            htmlstr += "</div>";
        }
        if (fpet.p3 > 0) {
            htmlstr += "<div>火：";
            let count = parseInt(fpet.p3 / 10);
            for (let i = 0; i < count; i++) {
                htmlstr += `<img class="imgprop" src="${redimg}" />`;
            }
            htmlstr += "</div>";
        }
        if (fpet.p4 > 0) {
            htmlstr += "<div>风：";
            let count = parseInt(fpet.p4 / 10);
            for (let i = 0; i < count; i++) {
                htmlstr += `<img class="imgprop" src="${yellowimg}" />`;
            }
            htmlstr += "</div>";
        }
        htmlstr += "</td>";
        htmlstr += "</tr>";
    }

    htmlstr += "</table>";

    Swal.fire({
        title: title,
        html: htmlstr,
        confirmButtonText: '关闭'
    });
}

function dofusion_getFusionByMain() {
    let main_id = parseInt($("#main_pet_select").val());
    let mainpet = petDataById[main_id];
    let mainprop = getMainProp(mainpet.p1, mainpet.p2, mainpet.p3, mainpet.p4);

    let race_offset = {};
    for (const k in petTable) {
        race_offset[petTable[k][mainpet.race]] = 1;
    }

    let sub1_props = [
        propertyTable[mainprop][0],
        propertyTable[mainprop][1],
        propertyTable[mainprop][2],
        propertyTable[mainprop][3]
    ];

    let htmlstr = "<table style='width: 100%; text-align: left;'>";
    let title = "主体【" + mainpet.name + "】融合可出";
    let fpet_ids = {};
    for (const k in race_offset) {
        for (const sub1_prop of sub1_props) {

            let fpet_id = fusionTable[k][sub1_prop];
            // fpet_ids[fpet_id] = 1;

            // 反方向查找是否有合适的客体1，有合适的才使fpet_ids[fpet_id]为1值
            let flag = 0;
            for (const fusion_xy of fusionTableByKey[fpet_id]) {
                let valpet = fusion_xy.valpet;
                let valprop = fusion_xy.valprop;

                let prop_main = propertyTableByKey[valprop].prop_main;
                let prop_sub1 = propertyTableByKey[valprop].prop_sub1;
                if (mainprop != prop_main) {
                    continue;
                }

                for (const pet_xy of petTableByKey[valpet]) {
                    let race_sub1 = pet_xy.race_sub1;
                    let race_main = pet_xy.race_main;
                    if (race_main != mainpet.race) {
                        continue;
                    }

                    for (const sub1pet of petDataByRace[race_sub1]) {
                        let sub1prop = getMainProp(sub1pet.p1, sub1pet.p2, sub1pet.p3, sub1pet.p4);
                        if (sub1prop != prop_sub1) {
                            continue;
                        }
                        fpet_ids[fpet_id] = 1;
                        flag = 1;
                        break;  // 找到合适的客体1后，跳出循环
                    }
                    if (flag == 1) {
                        break;  // 找到合适的客体1后，跳出循环
                    }
                }
                if (flag == 1) {
                    break;  // 找到合适的客体1后，跳出循环
                }
            }
        }
    }

    for (const k in fpet_ids) {
        let fpet = petDataById[k];
        htmlstr += "<tr style='boder-bottom: 1px solid #333;'>";
        htmlstr += "<td>" + `<img src="data/img/${fpet.img}.gif">` + "</td>";
        htmlstr += "<td>[" + fusionRaceByRace[fpet.race] + "]" + fpet.name + "</td>";
        htmlstr += "<td>";
        if (fpet.p1 > 0) {
            htmlstr += "<div>地：";
            let count = parseInt(fpet.p1 / 10);
            for (let i = 0; i < count; i++) {
                htmlstr += `<img class="imgprop" src="${greenimg}" />`;
            }
            htmlstr += "</div>";
        }
        if (fpet.p2 > 0) {
            htmlstr += "<div>水：";
            let count = parseInt(fpet.p2 / 10);
            for (let i = 0; i < count; i++) {
                htmlstr += `<img class="imgprop" src="${blueimg}" />`;
            }
            htmlstr += "</div>";
        }
        if (fpet.p3 > 0) {
            htmlstr += "<div>火：";
            let count = parseInt(fpet.p3 / 10);
            for (let i = 0; i < count; i++) {
                htmlstr += `<img class="imgprop" src="${redimg}" />`;
            }
            htmlstr += "</div>";
        }
        if (fpet.p4 > 0) {
            htmlstr += "<div>风：";
            let count = parseInt(fpet.p4 / 10);
            for (let i = 0; i < count; i++) {
                htmlstr += `<img class="imgprop" src="${yellowimg}" />`;
            }
            htmlstr += "</div>";
        }
        htmlstr += "</td>";
        htmlstr += "</tr>";
    }

    htmlstr += "</table>";

    Swal.fire({
        title: title,
        html: htmlstr,
        confirmButtonText: '关闭'
    });
}

function dofusion_getMainSub1() {
    let res_id = parseInt($("#res_pet_select").val());
    let respet = petDataById[res_id];
    let htmlstr = "";

    if (fusionTableByKey[respet.id].length > 0) {
        let valpet = fusionTableByKey[respet.id][0].valpet;    // x: valpet与respet.id一对一关系，所以每次循环valpet是不变的
        
        if (valpet == 7) {
            Swal.fire({
                title: "错误",
                html: "本服不支持三头蛇【" + respet.name +"】的融合",
                icon: "error",
                confirmButtonText: '关闭'
            });
            return;
        }

        htmlstr += "<table style='width: 100%;'><tr><th>主体</th><th>客体1</th></tr>";
        let showByMainRace = {};

        for (const race_xy of petTableByKey[valpet]) {
            let race_main = race_xy.race_main;
            let race_sub1 = race_xy.race_sub1;
            let race_main_name = raceDataByRace[race_main];
            let race_sub1_name = raceDataByRace[race_sub1];

            for (const main_pet of petDataByRace[race_main]) {
                for (const sub1_pet of petDataByRace[race_sub1]) {

                    for (const val_xy of fusionTableByKey[respet.id]) {
                        let valprop = val_xy.valprop;
                        let prop_main = propertyTableByKey[valprop].prop_main;
                        let prop_sub1 = propertyTableByKey[valprop].prop_sub1;
                        if (prop_main == getMainProp(main_pet.p1, main_pet.p2, main_pet.p3, main_pet.p4) &&
                            prop_sub1 == getMainProp(sub1_pet.p1, sub1_pet.p2, sub1_pet.p3, sub1_pet.p4)) {
                            // htmlstr += `<tr><td>[${race_main_name}]${main_pet.name}</td><td>[${race_sub1_name}]${sub1_pet.name}</td></tr>`;
                            // console.log(race_main_name);
                            if (!showByMainRace[race_main]) showByMainRace[race_main] = {};
                            if (!showByMainRace[race_main][main_pet.id]) showByMainRace[race_main][main_pet.id] = [];
                            showByMainRace[race_main][main_pet.id].push({
                                race_main_name: race_main_name,
                                main_pet_name: main_pet.name,
                                race_sub1_name: race_sub1_name,
                                sub1_pet_name: sub1_pet.name
                            });
                        }
                    }

                }
            }
        }

        for (const k1 in showByMainRace) {            
            for (const k2 in showByMainRace[k1]) {
                for (const v3 of showByMainRace[k1][k2]) {
                    htmlstr += `<tr><td>[${v3.race_main_name}]${v3.main_pet_name}</td><td>[${v3.race_sub1_name}]${v3.sub1_pet_name}</td></tr>`;
                }
            }
        }

        htmlstr += "</table>";
    }


    Swal.fire({
        title: "【" + respet.name + "的融合配方】",
        html: htmlstr,
        confirmButtonText: '关闭'
    });
}

function dofusion_errmsg(htmlstr) {
    Swal.fire({
        title: "错误",
        html: htmlstr,
        icon: "error",
        confirmButtonText: '关闭'
    });
}

function toBase64(str) {
    const bytes   = new TextEncoder().encode(str);   // UTF-8 → Uint8Array
    const binStr  = String.fromCharCode(...bytes);   // Uint8Array → 二进制字符串
    return btoa(binStr);                             // 二进制字符串 → Base64
}

function fromBase64(b64) {
    const binStr = atob(b64);                       // Base64 → 二进制字符串
    const bytes  = Uint8Array.from(binStr, c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);         // Uint8Array → UTF-8 字符串
}

///////////////////////////
// 程序入口 document ready
///////////////////////////
$.when(
    $.get("data/pet.ini"),
    $.get("data/def.ini"),
    $.ready
).then(function(resp_pet, resp_def) {
    // console.log("then");
    // console.log(resp_pet);
    // console.log(resp_def);

    let code = toBase64($("#res_pred_author").text());
    if (code != "CiAgICAgICAgICAgICAgICDkvZzogIXvvJp3dWRpY3PCoMKgwqDCoFFR77yaMTc2MzY3ODIwCiAgICAgICAgICAgIA==") {
        return;
    }

    // 解析pet.ini
    let pet = parseINI(resp_pet[0]);
    // console.log(pet);

    // 解析def.ini
    let def = parseINI(resp_def[0]);
    // console.log(def);

    // 初始化petData
    for (const k in pet["data"]) {
        let petInfoArr = pet["data"][k].split(",");
        let petInfo = {
            name: k,
            id: parseInt(petInfoArr[0]),
            initnum: parseInt(petInfoArr[1]),
            initrate: parseInt(petInfoArr[2]),
            v: parseInt(petInfoArr[3]),
            s: parseInt(petInfoArr[4]),
            t: parseInt(petInfoArr[5]),
            d: parseInt(petInfoArr[6]),
            p1: parseInt(petInfoArr[7]),
            p2: parseInt(petInfoArr[8]),
            p3: parseInt(petInfoArr[9]),
            p4: parseInt(petInfoArr[10]),
            img: petInfoArr[11],
            race: parseInt(petInfoArr[12])
        };

        petData.push(petInfo);
        petDataById[petInfo.id] = petInfo;
        if (petDataByRace[petInfo.race] == undefined) {
            petDataByRace[petInfo.race] = [];
        }
        petDataByRace[petInfo.race].push(petInfo);
        if (petDataByName[k] == undefined) {
            petDataByName[k] = [];
        }
        petDataByName[k].push(petInfo);
    }

    // 初始化raceData
    for (const k in pet["系"]) {
        let raceInfoArr = k.split(".");
        raceData.push({
            race: parseInt(raceInfoArr[0]),
            name: raceInfoArr[1],
        });
        raceDataByRace[parseInt(raceInfoArr[0])] = raceInfoArr[1];
    }

    // 初始化fusionPet
    for (const k in pet["融合"]) {
        fusionPet.push({
            id: parseInt(k),
            name: pet["融合"][k]
        });

        fusionPetById[parseInt(k)] = pet["融合"][k];
    }

    // 初始化fusionRace
    for (const k in pet["融合系"]) {
        let raceInfoArr = k.split(".");
        fusionRace.push({
            race: parseInt(raceInfoArr[0]) + 30,
            name: raceInfoArr[1]
        })

        fusionRaceByRace[parseInt(raceInfoArr[0]) + 30] = raceInfoArr[1];
    }

    // 初始化其他数据
    defwork = parseInt(def["default"]["defwork"]);
    defwork2 = parseInt(def["default"]["defwork2"]);
    defbase = parseInt(def["default"]["defbase"]);
    defbase2 = parseInt(def["default"]["defbase2"]);
    deftran = parseInt(def["default"]["deftran"]);
    itemtype = parseInt(def["item"]["itemtype"]);
    itemmax = parseInt(def["item"]["itemmax"]);

    // 初始化表格数据

    // fusionTable i=11 j=16
    for (let i = 0; i < fusionTable.length; i++) {
        for (let j = 0; j < fusionTable[i].length; j++) {
            let key = fusionTable[i][j];
            if (!fusionTableByKey[key]) fusionTableByKey[key] = [];
            fusionTableByKey[key].push({valpet: i, valprop: j});
        }
    }
    // console.log(fusionTableByKey);

    // petTable i=29 j=29
    for (let i = 0; i < petTable.length; i++) {
        for (let j = 0; j < petTable[i].length; j++) {
            let key = petTable[i][j];
            if (!petTableByKey[key]) petTableByKey[key] = [];
            petTableByKey[key].push({race_sub1: i, race_main: j});
        }
    }
    // console.log(petTableByKey);

    // propertyTable i=4 j=4
    for (let i = 0; i < propertyTable.length; i++) {
        for (let j = 0; j < propertyTable[i].length; j++) {
            let key = propertyTable[i][j];
            propertyTableByKey[key] = {prop_main: i, prop_sub1: j};
        }
    }
    // console.log(propertyTableByKey);

    initshow();

    // 融合
    $("#opt_btn").on("click", function() {

        let hasMain = false;
        let hasSub1 = false;
        let hasSub2 = false;
        let hasRes = false;

        let main_id = parseInt($("#main_pet_select").val());
        if (main_id > -1) {
            hasMain = true;
        }

        let sub1_id = parseInt($("#sub1_pet_select").val());
        if (sub1_id > -1) {
            hasSub1 = true;
        }

        let sub2_id = parseInt($("#sub2_pet_select").val());
        if (sub2_id > -1) {
            hasSub2 = true;
        }

        let res_id = parseInt($("#res_pet_select").val());
        if (res_id > -1) {
            hasRes = true;
        }

        if (hasMain && hasSub1) {
            // console.log("计算融合");
            dofusion();
        } else if (!hasMain && !hasSub1 && !hasRes) {
            dofusion_errmsg("主体、客体1和融合宠的3个选项不能同时为空！");
        } else if (hasMain && !hasSub1 && !hasRes) {
            // dofusion_errmsg("请再选择客体1或融合宠");
            dofusion_getFusionByMain();
        } else if (!hasMain && hasSub1 && !hasRes) {
            // dofusion_errmsg("请再选择主体或融合宠");
            dofusion_getFusionBySub1();
        } else if (!hasMain && !hasSub1 && hasRes) {
            dofusion_getMainSub1();
        } else if (hasMain && !hasSub1 && hasRes) {
            dofusion_getSub1();
        } else if (!hasMain && hasSub1 && hasRes) {
            dofusion_getMain();
        }
    });

    let timer_input = null;
    $("#search_petname_input").on("input", function() {
        if (timer_input) clearTimeout(timer_input);
        timer_input = setTimeout(function() {
            // console.log($("#search_petname_input").val());
            let petname = $("#search_petname_input").val();
            if (petDataByName[petname]) {
                let raceArr = [];
                for (const petInfo of petDataByName[petname]) {
                    raceArr.push(raceDataByRace[petInfo.race]);
                }
                $("#search_race_input").val(raceArr.join("|"));
            } else {
                $("#search_race_input").val("未查到结果");
            }
        }, 500);
    });

    return "done";
}).done(function(content) {
    // console.log("done");
    // console.log(content);
}).fail(function(err) {
    // console.log("fail");
    // console.log(err);
});