(function() {
var tagCombinations =  [["Audience:CHINA"],["Audience:INDIA"],["Audience:JAPAN"]] ,
  tags =  [{"display":"Audience","type":"group","children":[{"name":"Audience:CHINA","display":"CHINA"},{"name":"Audience:JAPAN","display":"JAPAN"},{"name":"Audience:INDIA","display":"INDIA"}]}],
  caption = "Select the options",
  type = "checkbox",
  defFilter = {};

window.rh.model.publish("p.tag_combinations", tagCombinations, { sync:true });
window.rh.model.publish("temp.data", {"tags": tags, "caption": caption, "type": type , "default": defFilter}, { sync:true });
})();
