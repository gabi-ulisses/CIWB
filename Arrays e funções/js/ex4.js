function segundos(h, m, s) {
    return (h * 3600) + (m * 60) + s;
}
    
    function tempoDecorrido(t1, t2) {
        const [h1, m1, s1] = t1.split(':').map(Number);
        const [h2, m2, s2] = t2.split(':').map(Number);
        
        const tempo1 = segundos(h1, m1, s1);
        const tempo2 = segundos(h2, m2, s2);
    
        if (tempo1 > tempo2) {
            return tempo1 - tempo2;
        } else {
            return tempo2 - tempo1;
        }
    }
    
function ex4(){
    const t1 = '13:30:10';
    const t2 = '13:31:05';
    const resultado = tempoDecorrido(t1, t2);
    console.log(`O tempo decorrido entre ${t1} e ${t2} é de ${resultado} segundos.`);
}  