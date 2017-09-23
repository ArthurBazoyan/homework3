<script>
const func3arg = function ( num1 , num2 , num3 ) 
{
		return ( num1 + num2 ) * num3;
};


const func0arg = function ()
{
	return 'something';
};


const fullName = function ( first , last ) 
{
	const fullname = first + ' ' +  last;
	return fullName;
};

const longeststr = function ( str1 , st2 , str3 )
{
	if( str1.length > str2.length && str1.length > str3.length )
	{
		console.log (str1);
	}
	if( str2.length > str1.length && str2.length > str3.length )
	{
		console.log (str2);
	}
	if( str3.length > str1.length && str3.length > str2.length )
	{
		console.log (str3);
	}
};


const comp = function ( num1 , num2 )
{
	if ( num1 === num2 )
		{
			return 0;
		}
	if ( num1 > num2 )
		{
			return 1;
		}
	else 
		{
			return -1; 
		}
};


const truethy = function( arg1 , arg2 , arg3 ) 
{
	return arg1 || arg2 || arg3 || false;
};

</script>