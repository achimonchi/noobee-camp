exports.capitalize=(string)=>{
    const s = String(string);
    return s.charAt(0).toUpperCase() + s.slice(1);
}

exports.toLowerCase=(string)=>{
    const s = String(string);
    return s.toLowerCase();
}