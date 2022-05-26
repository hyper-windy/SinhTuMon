function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const INF = MW.MATRIX.WIDTH*MW.MATRIX.HEIGHT;

function getNeighBour(i){
    var x = [i-MW.MATRIX.WIDTH, i+MW.MATRIX.WIDTH];
    if (i%MW.MATRIX.WIDTH == 0){
        x.push(i+1);
    }
    else if(i%MW.MATRIX.WIDTH == MW.MATRIX.WIDTH - 1){
        x.push(i-1);
    }
    else{
        x.push(i+1);
        x.push(i-1);
    }
    // if (i%MW.MATRIX.WIDTH != 0 && i%MW.MATRIX.WIDTH != MW.MATRIX.WIDTH-1){
    //     x = [i-1, i+1, i-MW.MATRIX.WIDTH, i+MW.MATRIX.WIDTH];
    // }
    // else if () {
    //     x = [i-MW.MATRIX.WIDTH, i+MW.MATRIX.WIDTH];
    // }
    var ans = [];
    for (var j = 0; j < x.length; j++){
        if(x[j] >= 0 && x[j] < MW.MATRIX.WIDTH*MW.MATRIX.HEIGHT && (shared_map.barrier.indexOf(x[j]) == -1)){
            ans.push(x[j]);
        }
    }
    return ans;
}

function bfs(src, des){
    var queue = [];
    var distance = [];
    var ans = new Array(MW.MATRIX.WIDTH*MW.MATRIX.HEIGHT);
    for(var i = 0; i < MW.MATRIX.WIDTH*MW.MATRIX.HEIGHT; i++){
        distance.push(INF);
    }
    queue.push(src);
    distance[src] = 0;
    ans[src] = -1;
    while(queue.length > 0){
        var p = queue.shift();
        if (p == des) {
            break;
        }
        var temp = getNeighBour(p);
        for(var i = 0; i < temp.length; i++){
            if(distance[temp[i]] > distance[p] + 1){
                distance[temp[i]] = distance[p] + 1;
                ans[temp[i]] = p;
                queue.push(temp[i]);
            }
        }

    }
    var x = [des];
    var y = des;
    while(ans[y] != -1){
        x.push(ans[y]);
        y = ans[y];
    }
    return x.reverse()
}

// function test(){
//     var x = [];
//     x.push([1,2]);
//     x.push([3,4]);
//     log(x);
//     log(x.length);
//     log(x.indexOf([1,2]))
// }