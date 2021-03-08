canvas = new fabric.Canvas('myCanvas');
playerx = 10;
playery = 38;
block_width = 30;
block_height = 30;
var playerobjects = "";
var blockobject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerobjects = Img;
        playerobjects.scaleToWidth(150);
        playerobjects.scaleToHeight(150);
        playerobjects.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerobjects);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img) {
        blockobject = Img;
        blockobject.scaleToWidth(block_width);
        blockobject.scaleToHeight(block_height);
        blockobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(blockobject);
    });
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("Shift and P are pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("Shift and M are pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if (keypressed == '38') {
        up();
        console.log("up key is pressed");

    }
    if (keypressed == '40') {
        down();
        console.log("down key is pressed");
    }
    if (keypressed == '37') {
        left();
        console.log("left key is pressed");
    }
    if (keypressed == '39') {
        right();
        console.log("right key is pressed");
    }
    if (keypressed == '87') {
        newImage('ironman_body.png');
        console.log("w key is pressed");
    }
    if (keypressed == '71') {
        newImage('hulk_legs.png');
        console.log("g key is pressed");
    }
    if (keypressed == '76') {
        newImage('spiderman_legs.png');
        console.log("l key is pressed");
    }
    if (keypressed == '84') {
        newImage('thor_left_hand.png');
        console.log("t key is pressed");
    }
    if (keypressed == '82') {
        newImage('thor_right_hand.png');
        console.log("r key is pressed");
    }
    if (keypressed == '89') {
        newImage('hulk_face.png');
        console.log("y key is pressed");
    }

}

function up() {
    if (playery >= 0) {
        playery = playery - block_height;
        console.log("up key is pressed X=" + playerx + "y=" + playery);
        canvas.remove(playerobjects);
        playerUpdate();
    }

}

function down() {
    if (playery <= 800) {
        playery = playery + block_height;
        console.log("down key is pressed X=" + playerx + "y=" + playery);
        canvas.remove(playerobjects);
        playerUpdate();
    }

}

function left() {
    if (playerx >= 0) {
        playerx = playerx - block_width;
        console.log("left key is pressed X=" + playerx + "y=" + playery);
        canvas.remove(playerobjects);
        playerUpdate();
    }

}

function left() {
    if (playerx >= 0) {
        playerx = playerx - block_width;
        console.log("left key is pressed X=" + playerx + "y=" + playery);
        canvas.remove(playerobjects);
        playerUpdate();
    }

}

function right() {
    if (playerx <= 1000) {
        playerx = playerx + block_width;
        console.log("right key is pressed X=" + playerx + "y=" + playery);
        canvas.remove(playerobjects);
        playerUpdate();
    }
}