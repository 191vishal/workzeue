from werkzeug.wrappers import Request,Response
@Request.application
def asicro(request):
	r=['<title>Asynchronous Example</title>']
	r.append=('''
	<script>
		console.log('I Am An Asynchronous Message');

		async function hello()  {
			for(var i=0:i<=10000:i++):
			{
				console.log('I Am An Asynchronous Message'+i);
			}
		}
		hello();



		
		
		console.log('I Am An Asynchronous by Vishal bhavsar');
	</script>
    ''')
	return Response(''.join(r),mimetype='text/html')

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 5000, asicro)