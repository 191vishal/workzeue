from from werkzeug.utils import escape
from werkzeug.wrappers import Request,Response

@Request.application
def Ecart(request):
	r=['<title>Vi Mart</title>']
	#if request.method == 'POST'
		#r.append('<h1>hello %s !</h1>' % escape(request.from['name']))
	r.append('''
		<script language='JavaScript'>
			function btn(){
							var q=document.getElementById('input').value;
							if q==0:
								
							document.getElementById('display').innerHTML =q+ "Tv" +"="+ +q*20000 +"<input type='button'id='rm1' value='Remove' onclick='rmv()'>";
			}
			function btn1(){
							var w=document.getElementById('input1').value;
							document.getElementById('display1').innerHTML =w+" Smart Phone "+"="+ +w*12000 +"<input type ='button' id='rm2 value='Remove' onclick='rmv()'>"

			}
			function btn2(){
							var e=document.getElementById('input2').value;
							document.getElementById('display2').innerHTML =e+" AC "+"="+ +e*15000 +"<input type ='button' id='rm3 value='Remove' onclick= 'rmv()'>"
			}
			function rmv(){
							var s=document.getElementById('input').value='';
							document.getElementById('display').inneHTML="";
			}
			function rmv1(){
							var s=document.getElementById('input1').value='';
							document.getElementById('display1').inneHTML="";
			}
			function rmv2(){
							var s=document.getElementById('input2').value='';
							document.getElementById('display2').inneHTML="";
			}
		</script>
			<from action="" method="post">
			<table align="center">
				<th>
				<h1>Tv</h1>
				<h4>Rs. 20000</h4>
				<input type="text" id="input" placeholder="Quantity"></br></br>
				<input type="Button" value="Add To Cart"onclick="btn()">
				</th>
				<th>
				<h1>Smart Mobile</h1>
				<h4>Rs. 12000</h4>
				<input type="text" id="input1" placeholder="Quantity"></br></br>
				<input type="Button" value="Add To Cart" onclick="btn1()">
				</th>
				<th>
				<h1>AC</h1>
				<h4>Rs. 15000</h4>
				<input type ="text" id ="input2"placeholder="Quantity"></br></br>
				<input type="Button"value="Add To Cart"onclick="btn2()">
				</th>
			</table>
			</from>
			<label> _ _ _ Add To Cart _ _ _</label>
			<p><span id="display"></span></p>
			<p><span id="display1"></span></p> 
			<p><span id="display2"></span></p>  

	''')	
	return Response(''.join(r), mimetype='text/html')
if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 4000, Ecart)
